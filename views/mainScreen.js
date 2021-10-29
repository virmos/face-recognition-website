const mainScreen = 
`<header class="" id="header">
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
    <section class="camera d-flex flex-column justify-content-center align-items-center" id="camera">
        <div class="section-container">
            
        </div>
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
}

export default {
    content: mainScreen,
    onload: onload,
}