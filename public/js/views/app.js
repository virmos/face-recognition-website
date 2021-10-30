import ClassController from "../controllers/classrooms.js";

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
            <div class="section-title">
                <h2>Absent students:</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 fadeInUpWrapper">
                    <div class="animatedFadeInUp">
                        <h3 class="resume-title">Education</h3>
                        <div class="resume-item">
                            <div class="card"> 
                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
                                <div class="text-center card-container">
                                    <em> Ha Dong Giang </em>
                                </div> 
                            </div>
                        </div>
                        <div class="resume-item">
                            <div class="card"> 
                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
                                <div class="text-center card-container">
                                    <em> Ha Dong Giang </em>
                                </div> 
                            </div>
                        </div>
                        <div class="resume-item">
                            <div class="card"> 
                                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:100%">
                                <div class="text-center card-container">
                                    <em> Ha Dong Giang </em>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>`

function onload() {
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
    //
    // subscribe to class
    //
    const formSubscribe = document.getElementById("js-formSubscribe")
    formSubscribe.addEventListener("submit", (event) => {
        event.preventDefault()
        const classId = formSubscribe.classId.value
        ClassController.apiSubscribeToClass(classId)
    })
    

    //
    // Recognition
    //
    // Promise.all([
    //     faceapi.nets.faceRecognitionNet.loadFromUri('/resources/models'),
    //     faceapi.nets.faceLandmark68Net.loadFromUri('/resources/models'),
    //     faceapi.nets.ssdMobilenetv1.loadFromUri('/resources/models'),
    // ]).then(start)

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

            // const recognitions = await faceapi.detectAllFaces(image).withFaceLandmarks()
            // const resizedRecognitions = faceapi.resizeResults(recognitions, displaySize)
            // const results = resizedRecognitions.map(face => faceMatcher.findBestMatch(face.descriptor))
            // results.forEach((result, i) => {
            //     const box = result[i].detection.box
            //     const drawBox = new faceapi.draw.DrawBox(box, {label: result.toString()})
            //     drawBox.draw(canvas)
            // })
        })
    }

    function loadLabeledImages() {
        const labels = ['BlackWidow', 'CaptainAmerica', 'Thor', 'TonyStark', 'JimRhodes']
        return Promise.all(
            labels.map(async label => {
                const descriptions = []
                for (let i = 1; i <= 2; i++) {
                    const img = await faceapi.fetchImage(`resources/people-images/${label}/${i}.jpg`)
                    const recognitions = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
                    descriptions.push(recognitions.descriptor)
                }
                return new faceapi.LabeledFaceDescriptors(label, descriptions)
            })
        )
    }
}

export default {
    content: mainScreen,
    onload: onload,
}