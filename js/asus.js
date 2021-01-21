(function () {
  const projects = [
    {
      title: 'Face recognition system for ASUS internal',
      image: './img/projects/fr.gif',
      imageAlt: 'fr',
      description: ' Has experience in close world Face recognition training, train FR model by facenet frameworks, can attain near 99% accuracy in ASUS internal for 6000ids.',
      badgeCaption: 'Detail',
      links: {
      },
      accomplishments: [
        '1:N facial Identify',
        'Attain near 99% accuracy in ASUS internal for 6000ids',
        'Provide an auto evaluation mechanism to find best model parameters by the ROC curve and detect accuracy'
      ]
    },
    {
      title: 'Auto scraping face data',
      image: './img/projects/face_catch.png',
      imageAlt: 'face catch',
      description: 'A mechanism end to end method to auto collect face datasets by parser Google search data.',
      badgeCaption: 'Detail',
      links: {
      },
      accomplishments: [
        'Web scraping by Selenium',
        'Provide a mechanism to auto save crop align face by mtcnn and orgin face',
        'Provide a proprocessing mechanism to clean each face ids data',
        'Use dbscan clustering method for filter outliers face id picture',
        
      ]
    },
    {
      title: 'Eyeglasses synthesis.',
      image: './img/projects/glasses.png',
      imageAlt: 'add glasses',
      description: 'According to face landmarks and face direction to add difference type glasses into datasets to improve 2% face verification accuracy.',
      badgeCaption: 'Detail',
      links: {
      },
      accomplishments: [
        'Use CV mechanism method to add eyeglasses on Face id face to improve face verification performance',
        'Dlib Face landmark method to find eye postion',
        'Deepgaze face direct method for filter yaw degree below 15 degree',
        'Add 8 differenct types glassses',

      ]
    },
    {
      title: '3D Face Synthesis.',
      image: './img/projects/aug.gif',
      imageAlt: '3D Face Synthesis',
      description: 'Simulating face image appearances across unseen 3D viewpoints. To increase face data for same face id.',
      badgeCaption: 'Detail',
      links: {
      },
      accomplishments: [
        '3D Face Synthesis for data augmentation',
        'Facial landmark detector',
        'Given these detected landmarks we estimate the six degrees of freedom pose for the face',
      ]
    },
    {
      title: 'Gesture dectect on tango project',
      image: './img/projects/gesture_hand.gif',
      imageAlt: 'Gesture dectect',
      description: 'Provide a sdk porting on unity, Can detect serival hand gesture base on Yolo object detection.',
      badgeCaption: 'Detail',
      links: {
      },
      accomplishments: [
        'Base on Yolo framework training hand gesture',
        'Build Yolo on unity',
        'Established related functions not limited to palm identification but also apply palm bounding box in relevant projects',
        'Family with other object detection method likes overfeat, RCNN'
        
      ]
    },


  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  
  const projectOffsetHeight = document.getElementById('project').offsetTop
  const actionBtn = document.querySelector('.fixed-action-btn a:first-of-type')
  let skillsAnimated = false
  let aboutCardPlaced = false
  let projectPlaced = false
  let learnMoreAnimated = false

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations)
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) { return nav.classList.add('blue-grey', 'lighten-3', 'shadow') }
    nav.classList.remove('blue-grey', 'lighten-3', 'shadow')
  }

  // Handle floating action button
  function showFloatingActionButton() {
    if (window.pageYOffset > navHeight) { return actionBtn.classList.remove('scale-out') }
    actionBtn.classList.add('scale-out')
  }

  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) { return }
    // switch status to placed
    aboutCardPlaced = true
    // get about section
    const aboutSection = document.querySelector('.section-about .row')
    // generate html for each blog post
    blogPosts.forEach(post => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animated jackInTheBox slow">
            <a href="${post.link}" >
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title">
                  ${post.name}
                </span>
              </div>
            </a>
          </div>
        </div>
      `
    })
  }

  // Handle skill section animation
  function animateSkills() {
    
    const firstSkillSection = document.getElementById('front-end-carousel-item')
    const animations = ['animated', 'slideInRight']
    skillsAnimated = true
    firstSkillSection.classList.add(...animations)
    firstSkillSection.addEventListener('animationend', () => handleAnimationEnd(event.target, animations))
  }

  // Handle learn more section animation
  function animateLearnMore() {
    const learnMoreOffsetHeight = document.getElementById('more-info').offsetTop
    if (window.pageYOffset + window.innerHeight <= learnMoreOffsetHeight) { return }
    const buttons = document.querySelectorAll('.learn-more-link a')
    const animations = ['animated', 'bounceIn', 'slow']
    learnMoreAnimated = true
    buttons.forEach(button => button.classList.add(...animations))
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`
    }
    if (links.facebook) {
      icons += `<a href=${links.facebook} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-facebook"></i></a>`
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`
    }
    if (links.heroku) {
      icons += `<a href=${links.heroku}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`
    }
    return icons
  }

  function getAccomplishments(accomplishments) {
    return accomplishments.map(point => `<li><i class="fas fa-caret-right"></i>${point}</li>`).join('')
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) { return }
    // get elements
    const projectSection = document.querySelector('.section-project .row')
    // switch status to placed
    projectPlaced = true
    // generate html for each project
    projects.forEach(project => {
      // Get all icon links
      const icons = getIconLinks(project.links)
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments)

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text">
                ${accomplishments}
              </ul>
              <div id="card-reveal-icons">
                ${icons}
              </div>
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `
    })
  }

  window.addEventListener('scroll', () => {
    if (!projectPlaced) { placeProjects() }
    if (!learnMoreAnimated && projectPlaced) { animateLearnMore() }
  })
})()