(function () {
  const projects = [
    {
      title: 'Get fisheye camera center and radius',
      image: './img/projects/circle.png',
      imageAlt: 'Get fisheye camera center and radius',
      description: 'Use OpenCV method to get fisheye camera center and radius, Modules to the fisheye class.',
      badgeCaption: 'Detail',
      links: {
        github: 'https://github.com/GilbertTam/fisheye_tool',
        //heroku: 'https://nextmeal.herokuapp.com/#/',
        //medium: 'http://tiny.cc/kd1zgz'
      },
      accomplishments: [
        'Family with openCV contour detect method.',
        'getRadiusCenter() method obtain fisheyes center and radius.',
      ]
    },
    {
      title: 'Face mask synthesis',
      image: './img/projects/face_mask_ger.gif',
      imageAlt: 'Face mask synthesis',
      description: 'According to face landmark position to add mask on front face and side face. Use synthesis face on UTKFace datasets, All-Age-Faces Dataset.',
      badgeCaption: 'Detail',
      links: {
        github: 'https://github.com/GilbertTam/face_mask_generate',
        heroku: 'https://arxiv.org/abs/2003.09093'
      },
      accomplishments: [
        'Write a algorithm to add mask on face according to face landmark.',
        'Compare to Masked Face Recognition Dataset and Application method (Home icon), the result is more fit on UTKFace datasets.',
        'Train CycleGAN method from wear mask to remove mask face.',
        'Train CycleGAN method from remove mask face to wear mask.',
      ]
    },
    {
      title: 'Face mask detect',
      image: './img/projects/face_mask_detect.gif',
      imageAlt: 'Face mask detect',
      description: 'Binary object detection for people wear mask or not.',
      badgeCaption: 'Detail',
      links: {
      },
      accomplishments: [
        'Find a application to filter out people  wear mask or not.',
        'Can attain more than 90% accuracy on general case.'
      ]
    },
    {
      title: 'Helmet detection',
      image: './img/projects/helmet.gif',
      imageAlt: 'Helmet detection',
      description: 'Aim to improve the performance about face recognition, need to filter out the people which wear helmet befor face identification.',
      badgeCaption: 'Detail',
      links: {
        github: 'https://github.com/GilbertTam/helmet_detection_yolov3'
      },
      accomplishments: [
        'Based on Yolov3 frameworks to train helmet detection.',
        'Can reach over 90% on our scenes.',
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