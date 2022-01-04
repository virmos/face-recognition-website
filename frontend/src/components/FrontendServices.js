import * as faceapi from 'face-api.js';
import studentServices from './ServerServices.js'

const addAnimation = () => {
  const items = document.querySelectorAll('.animatedFadeInUp');
  items.forEach(item => {
      item.classList.remove('fadeInUp');
  })
  
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              items.forEach(item => {
                  item.classList.add('fadeInUp');
              })
          return;
          }
          items.forEach(item => {
              item.classList.remove('fadeInUp');
          })
      });
 });
  observer.observe(document.querySelector('.fadeInUpWrapper'));
}

const loadModels = () => {
  Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
    ]).then(async () => {
      const imageUpload = document.getElementById('imageUpload')
        const container = document.getElementById("camera")

        const section = document.getElementById('cameraContainer')
        const displaySize = {width: 9*section.offsetWidth/10, height: 8*section.offsetHeight/10}

        const labeledFaceDescriptors = await loadLabeledImages()
        const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.8)

        let image, canvas
        let faces = []
        imageUpload.addEventListener('change', async() => {
            if (image)  image.remove()
            if (canvas) canvas.remove()
            image = await faceapi.bufferToImage(imageUpload.files[0])
            canvas = faceapi.createCanvasFromMedia(image)

            container.append(image)
            container.append(canvas)

            let times = displaySize.height / image.height
            let newImageDimensions = {width: image.width * times, height: image.height * times}

            faceapi.matchDimensions(image, newImageDimensions)
            faceapi.matchDimensions(canvas, newImageDimensions)

            const recognitions = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors()
            const resizedRecognitions = faceapi.resizeResults(recognitions, displaySize)
            const results = resizedRecognitions.map(face => {
              if (face.descriptor) {
                return faceMatcher.findBestMatch(face.descriptor)
              }
              return 'Unidentified Person'
            })
            results.forEach((result, i) => {
              studentServices.update(result._label)
            })
        })
    })
}

const loadLabeledImages = () => {
  const labels = ['Hà Đông Giang', 'Duy Linh', 'Long Gooner']
  const images = {'Hà Đông Giang': 
                  ['https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/83276023_2705769406335540_5587245263702982656_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=19026a&_nc_ohc=cy5BE9LNKhYAX-VLJou&_nc_oc=AQl_Y21wkVgpJXqKzS6YzguQJRGFtoh3smIDZKi6IhbBks49kbxt3USHQLj_nOGzaW12-bDRyBEPP2ryYpHmgECZ&_nc_ht=scontent-sin6-1.xx&oh=00_AT84IhCICPQgK9ZKssJU6RJYNfsZQZAS7HbDMM2Pt7_6Ag&oe=61FB593F', 
                  'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/269716345_3364021310510343_8650377520019153917_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zbsoctsX1MUAX9KR35g&_nc_ht=scontent-sin6-2.xx&oh=00_AT8pe-IYSZx00AgbXFFIFs6xz2mAP0GpSuHwM8c3TeYeoA&oe=61D99012', 
                  'https://scontent-sin6-2.xx.fbcdn.net/v/t1.18169-9/17796209_1905711876341301_3312324403931478493_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=Gb5L_zBZhp8AX9Ua_F8&tn=koOirwGrNqiDiTaZ&_nc_ht=scontent-sin6-2.xx&oh=00_AT_nPzb2OgyTvxmRLWun2x_sMWooGhznhHJ9B9ypY1hmXA&oe=61F95D2E'], 
                  
                  'Duy Linh': 
                  ['https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/56968293_2358775814351953_4477001487611854848_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=u-B6RFMpHR0AX8N2Fhf&_nc_ht=scontent-sin6-1.xx&oh=00_AT_yDboJBnCNqf5NVT0A9VrumBVh9YV-7FAr1jToLpPfMw&oe=61FB70E2', 
                  'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/46501254_2267248670171335_4801246667779080192_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=hbAx3MmpRrkAX8LO8dl&tn=koOirwGrNqiDiTaZ&_nc_ht=scontent-sin6-1.xx&oh=00_AT8-0bd9Zq83Kh60oY-8N1oE6xJvLrGcQoljyFdBfIfwAA&oe=61F9EB5D', 
                  'https://scontent-sin6-2.xx.fbcdn.net/v/t31.18172-8/29354999_2099016526994551_5363103387704424028_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=upU4ZBmGB7gAX_DUC2f&tn=koOirwGrNqiDiTaZ&_nc_ht=scontent-sin6-2.xx&oh=00_AT-J496iYT72_sMpKW3Mic4G88d0-RiM1zyG3PfjQNqF2Q&oe=61FB67FE'], 
                  
                  'Long Gooner': 
                  ['https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/248441315_1698150537243121_2776121901145258510_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TQGJfW0rPxAAX-8X52t&_nc_ht=scontent-sin6-1.xx&oh=00_AT8a-pbZtYEAflUlWFClu3qny3Bl2F-nYXQWsYUwujYk8g&oe=61D8D9FF',
                  'https://scontent-sin6-3.xx.fbcdn.net/v/t31.18172-8/18739025_497945983930255_3368910193095847091_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_ohc=pI4U4WUWVAQAX-OpzAR&_nc_ht=scontent-sin6-3.xx&oh=00_AT-bqqBX6lJQ40QzxgLdXXftT58a_OwomGNGqRQpRVG9yA&oe=61F991BF',
                  // 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/35051895_702892616768923_1148192638239768576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=VKHRIETsSm4AX-rWfx6&_nc_oc=AQkBUqmChPhnuJBPFl94OLwCmvhgrKkf47xgcS_w1zLtUgcMT-TsKRbxPFM7MoEKqu8JkOUgIE8vRg_erMrcBD5_&_nc_ht=scontent-sin6-2.xx&oh=00_AT91jn--NYXNzLijytYWPfwm2yqFe2A0OTYS5h7ATCcqqQ&oe=61F871B8',
                  'https://scontent-sin6-3.xx.fbcdn.net/v/t31.18172-8/18739025_497945983930255_3368910193095847091_o.jpg?_nc_cat=110&ccb=1-5&_nc_sid=19026a&_nc_ohc=pI4U4WUWVAQAX-OpzAR&_nc_ht=scontent-sin6-3.xx&oh=00_AT-bqqBX6lJQ40QzxgLdXXftT58a_OwomGNGqRQpRVG9yA&oe=61F991BF',
                  ]
                }

  const realLabels = {'Hà Đông Giang': '617bf02afd2f40aecfe87211', 
                      'Duy Linh': '617bf08dfd2f40aecfe87212', 
                      'Long Gooner': '617d7363c4fcaea5ec39ea17'}
  
  return Promise.all(
    labels.map(async label => {
      const descriptions = []
      for (let i = 0; i < 3; i++) {
        const img = await faceapi.fetchImage(images[label][i])
        const recognitions = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
        if (recognitions) 
          descriptions.push(recognitions.descriptor) //128 floats for each face
        else 
          descriptions.push(new Float32Array(128))
      }
      console.log(descriptions)
      return new faceapi.LabeledFaceDescriptors(realLabels[label], descriptions)
    })
  ).then((descriptors) => {
    alert('Model finished loading')
    return descriptors
  })
}

const services = { addAnimation, loadModels }
export default services