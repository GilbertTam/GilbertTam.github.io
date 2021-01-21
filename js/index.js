(function () {
  const projects = [
    {
      title: 'Train and Deploy head detect on Nano/Xavier',
      image: './img/projects/face_head.jpg',
      imageAlt: 'head face',
      description: 'Has experience in end to end training head detection with difference frameworks, Has experience in deploying head models with NVIDIA TensorRT on edge devices Nano/Xavier.',
      badgeCaption: 'Detail',
      links: {
        github: 'https://github.com/GilbertTam/',
        //heroku: 'https://nextmeal.herokuapp.com/#/',
        //medium: 'http://tiny.cc/kd1zgz'
      },
      accomplishments: [
        'Modify lffd model architecture and add data augmentation method to improve 1.66% mAP and attain 95% accuracy on Brainwash dataset compared with orgin state of art head detect model.',
        'The speed about my model can attain over 100FPS with 640*480 resoltion after using FP16 tensorrt speed up.',
        'Develop auto script to evaluation model performance, select best model from difference test scene.',
        'Set up an auto evaluation rule on difference scense. Only need to import the detect result and ground truth will auto generate evaluation result index likes mAP, precision recall index.',
        'Train Centernet frameworks by Pytorch with backbone DLA-34 and MobilenetV2-fpn.',
        'Train lffd frameworks by MXNet.',
        'Train face, non face detection use MobilenetV2 by Keras framework.',
      ]
    },
    {
      title: 'Fisheye camera person detect',
      image: './img/projects/combine_fisheye.gif',
      imageAlt: 'Fisheye camera person detect',
      description: 'Provide two method to detect person on fisheye camera. One Use RAPiD person detect method on fisheye system. Another use Pifpaf keypoints detect on dewarp fisheye image, Then transfer dewarp bounding box to rewarp fisheye image.',
      badgeCaption: 'Detail',
      links: {
      },
      accomplishments: [
        'Provide two road to detect person on fisheye camera.',
        'Write transfer method to transfer dewarp bounding box to rewarp according to CV method.',
        'Integrate Pifpaf pose detection method into system for obtain bounding box and keypoint information.',
        'Transform fisheye Dewarp and rewarp image.'
      ]
    },
    {
      title: 'Face Direct',
      image: './img/projects/direct.gif',
      imageAlt: 'Face Direct',
      description: 'Implentment more lightweight face direct model',
      badgeCaption: 'Detail',
      links: {
        //chrome: 'https://bit.ly/306Wp7b',
        //facebook: 'https://www.facebook.com/profile.php?id=1587343981'
      },
      accomplishments: [
        'Use lightweight EfficientNetB0 backbone with multi task to detect 3 axis degrees from head direct.',
        'With 4.4M parameters 4.155 MAE',
        'Compare to orgin face direct model FSA-Net,which with 5.1MB parameters and 5.07 MAE #4 in BIWI dataset, More lighter and better performance.',
      ]
    },
    {
      title: 'Integrate Sort/Deep Sort Tracking into Person Detect, Integrate sort into FR system',
      image: './img/projects/2.gif',
      imageAlt: 'Integrate Sort/Deep Sort Tracking into Person Detect',
      description: '',
      badgeCaption: 'Detail',
      links: {
        //github: 'https://github.com/GilbertTam/',
        //heroku: 'https://boiling-beach-19178.herokuapp.com/',
        //facebook: 'https://www.facebook.com/profile.php?id=1587343981'
      },
      accomplishments: [
        '',
        '',
        '',
        '',
        '',
        ''
      ]
    },
    {
      title: 'Torch System',
      image: './img/projects/1.gif',
      imageAlt: 'Torch System',
      description: 'Use pose detection offset to estimate palms position, Use this position calculate customers foucas product in store, and summary the hot spot',
      badgeCaption: 'Detail',
      links: {
    
      },
      accomplishments: [
        'Use light pose detection method can reach real time on the system.',
        'Write a method to estimate customer hand position and combine with store focus product.',
        'Summary customer behavior.',
      ]
    },
    {
      title: 'Crowd Counting and Density Estimation',
      image: './img/projects/csr.gif',
      imageAlt: 'Crowd Counting and Density Estimation',
      description: '',
      badgeCaption: 'Detail',
      links: {

      },
      accomplishments: [
        '',
        '',
        '',
        '',
        '',
        '',
      ]
    },
    {
      title: 'Train and Deploy Age/Gender Detection',
      image: './img/projects/age2.gif',
      imageAlt: 'Train and Deploy Age/Gender Detection',
      description: 'Train Age gender attributes by Keras, Deploy model on edge devices Nano and Xavier-nx',
      badgeCaption: 'Detail',
      links: {
        github: 'https://github.com/GilbertTam/',
        //medium: 'https://bit.ly/2yIrimi'
      },
      accomplishments: [
        'Use Wide Resnet backbone to attain 97.46 percentage gender accuracy after fine tune model. Compared to the origin model , improve 10 percentage accuracy.',
        'Use EfficientNetB3 backbone to attain 95.1 percentage gender accuracy after fine tune model. Compared to the origin model , improve 10 percentage accuracy.',
        'Use Mobilnet backbone attain 97.46 percentage gender accuracy and 79.5 percentage age accuracy.',
        'According to covid-19. Write an algorithm to add  mask on a dataset to enhance gender accuracy in the real world.',
        'Deploy age Model to production as an flask api, In the same route can use POST method to get age /gender values.',
        'EfficientNetB3 can reach 80.5% age accuracy. And 78.6% gender accuracy for five range 幼兒(0-7) 青少年(8-19) 成年(20-50) 中年(51-70) 老年(71-) on SOGO side face scenes.',
        'Train with side face, mask face, front face , mixed models.',
      ]
    }
  ]

  const blogPosts = [
    {
      name: '興趣嗜好',
      link: './hobby.html',
      image: './img/about-me/about-me-1.jpeg'
    },
    {
      name: 'cv相關project',
      link: 'cv.html',
      image:'./img/about-me/about-me-2.jpg"'
    },
    {
      name: '在華碩的project',
      link: './project_Asus.html',
      image: './img/about-me/about-me-5.jpg'
    },
    {
      name: '證照及學習成績',
      link: './study.html',
      image: './img/about-me/about-me-6.jpg'
    }
    
  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const skillOffsetHeight = document.getElementById('skill').offsetTop
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
      // target="_blank"
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
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) { return }
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
    animateNav()
    showFloatingActionButton()
    if (!aboutCardPlaced) { animateAboutCards() }
    if (!skillsAnimated) { animateSkills() }
    if (!projectPlaced) { placeProjects() }
    if (!learnMoreAnimated && projectPlaced) { animateLearnMore() }
  })
})()