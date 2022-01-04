const mainScreen = `
<header class="" id="header">
    <div class="d-flex flex-column" id="menu">
        <nav class="nav-menu" id="nav-menu">
            <ul>
                <li><a class="d-flex" href="#hero">
                        <i class="bi bi-house-door"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li><a class="d-flex" href="#camera">
                        <i class="bi bi-camera"></i>
                        <span>Camera</span>
                    </a>
                </li>
                <li><a class="d-flex" href="#resume">
                        <i class="bi bi-person"></i>
                        <span>Database</span>
                    </a>
                </li>
                <li>
                    <form id="js-formSubscribe">
                        <span>Join class</span>
                        <input type="text" id="classId">
                        <input type="submit" value="Done">
                    </form>
                </li>
            </ul>
        </nav>
    </div>
</header>

<section class="hero d-flex flex-column justify-content-center align-items-center" id="hero">
    <div class="section-container">
        <p>
            <div class="text-center">
                <h1 class="text-light">Face recog website</h1>
            </div>
            <div class="type-writer">
                <span class="break-word">Waiting for model loading. Please bear a minute!</span>
            </div>
        </p>
    </div>
</section>

<main class="main" id="main">
    <section class="camera-container d-flex flex-column justify-content-center align-items-center" id="cameraContainer">
        <div class="camera d-flex flex-column justify-content-center align-items-center" id="camera">
        </div>
        <input class="image-upload" type="file" id="imageUpload" title=""></input>
    </section>

    <section class="resume" id="resume">
        <div class="container">
            <div class="section-title" id="resumeTitle">
                <h2>Absent students:</h2>
            </div>
            <div class="row" id="resumeRow">
                <div class="col-lg-3 fadeInUpWrapper">
                    <div class="animatedFadeInUp" id="col1">
                        <div class="resume-item">
                            <div class="card"> 
                                <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/35051895_702892616768923_1148192638239768576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=aKKUF5guOLQAX8iJUUe&_nc_oc=AQkr2eRsyqQtjvSyJNO6TI7cjSMbc5KckRETHsXJqIfqCfnOEXGZWoEgZMj47spsK70&_nc_ht=scontent.fhan3-3.fna&oh=00_AT-YwZdE5vjx1NXBQi9Cb9FVuXeHmE0v6aEwVaDbzQSpkA&oe=61E4AB38" alt="Avatar" style="width:100%">
                                <div class="text-center card-container">
                                    <em> Long Gooner </em>
                                </div> 
                            </div>
                            <div class="card"> 
                                <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/35051895_702892616768923_1148192638239768576_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=aKKUF5guOLQAX8iJUUe&_nc_oc=AQkr2eRsyqQtjvSyJNO6TI7cjSMbc5KckRETHsXJqIfqCfnOEXGZWoEgZMj47spsK70&_nc_ht=scontent.fhan3-3.fna&oh=00_AT-YwZdE5vjx1NXBQi9Cb9FVuXeHmE0v6aEwVaDbzQSpkA&oe=61E4AB38" alt="Avatar" style="width:100%">
                                <div class="text-center card-container">
                                    <em> Long Gooner </em>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>`

function onResumeChanges(response) {
    absentStudents = response.absentStudents
    totalResults = response.totalResults
    title = document.getElementById("resumeTitle")
    const titleHtml = `<h2>Absent students: ${totalResults}</h2>`
    title.insertAdjacentHTML("beforeend", titleHtml)

    listImgs = document.getElementById("resumeRow")
    absentStudents.forEach(absentStudent => function() {
        const resumeItemHtml = `
        <div class="col-lg-3 fadeInUpWrapper">
            <div class="resume-item">
                <div class="card"> 
                    <img src="${absentStudent.image}" alt="Avatar" style="width:100%">
                    <div class="text-center card-container">
                        <em> ${absentStudent.name} </em>
                    </div> 
                </div>
            </div>
        </div>`
        listImgs.insertAdjacentHTML("beforeend", resumeItemHtml)
    })
}

function addAnimation() {
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

function onload() {
    addAnimation()
    //
    // subscribe to class: create new entry with current date, all status false
    //
    const formSubscribe = document.getElementById("js-formSubscribe")
    formSubscribe.addEventListener("submit", async (event) => {
        event.preventDefault()
        const classId = formSubscribe.classId.value
    }) 

    Promise.all([
    //     faceapi.nets.faceRecognitionNet.loadFromUri('/resources/models'),
    //     faceapi.nets.faceLandmark68Net.loadFromUri('/resources/models'),
    //     faceapi.nets.ssdMobilenetv1.loadFromUri('/resources/models'),
    ]).then(start)
    
    async function start() {
        const imageUpload = document.getElementById('imageUpload')
        const container = document.getElementById("camera")
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        const section = document.getElementById('cameraContainer')
        const displaySize = {width: 9*section.offsetWidth/10, height: 8*section.offsetHeight/10}

        // const labeledFaceDescriptors = await loadLabeledImages()
        // const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.8)

        let image, canvas
        let faces = []
        imageUpload.addEventListener('change', async() => {
            
            axios.get(`/get?module=cs231`).then(response => console.log(response.data))

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

            const recognitions = await faceapi.detectAllFaces(image).withFaceLandmarks()
            const resizedRecognitions = faceapi.resizeResults(recognitions, displaySize)
            const results = resizedRecognitions.map(face => faceMatcher.findBestMatch(face.descriptor))
            results.forEach((result, i) => {
                const box = result[i].detection.box
                const drawBox = new faceapi.draw.DrawBox(box, {label: result.toString()})
                faces.push(result.toString())
                drawBox.draw(canvas)
            //     ClassController.apiUpdateClassAttendance(faces)
            //     onResumeChanges(apiGetClassAttendance())
            })
        })
    }

    function loadLabeledImages() {
        const labels = ['Black Widow', 'Captain America', 'Thor', 'Tony Stark', 'Jim Rhodes']
        const realLabels = {'Black Widow': '617d7351c4fcaea5ec39ea16', 
                            'Captain America': '617bf08dfd2f40aecfe87212', 
                            'Thor': '617bf098fd2f40aecfe87213', 
                            'Tony Stark': '617d7363c4fcaea5ec39ea17', 
                            'Jim Rhodes': '617bf02afd2f40aecfe87211'}
        return Promise.all(
            labels.map(async label => {
                const descriptions = []
                for (let i = 1; i <= 2; i++) {
                    const img = await faceapi.fetchImage(`https://raw.githubusercontent.com/WebDevSimplified/Face-Recognition-JavaScript/master/labeled_images/${label}/${i}.jpg`)
                    const recognitions = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                    descriptions.push(recognitions.descriptor)
                }
                return new faceapi.LabeledFaceDescriptors(realLabels[label], descriptions)
            })
        )
    }
}

export default {
    content: mainScreen,
    onload: onload,
}