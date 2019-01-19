var parentId = "projects"
var projects = [{
  'name': ''
}]
$(document).ready(() => {
  addWebApp().concat(addMobileApp()).concat(others()).map(this.createCard);

  $('.navbar-nav').on('click', '.nav-link', function (e) {
    $(`#${parentId}`).empty()
    switch (e.currentTarget.hash) {
      case '':
        addWebApp().concat(addMobileApp()).concat(others()).map(createCard);
        break;
      case '#web':
        addWebApp().map(createCard);
        break;
      case '#app':
        addMobileApp().map(createCard);
        break;
      case '#others':
        others().map(createCard);
        break;

    }
    $(".nav-link").removeClass('active');
    $(this).addClass('active')
    e.preventDefault();

  })
});

function others() {
  return [{
    type: 'Line Chatbot',
    name: 'Trip inquiry and booking',
    description: 'A Line chatbot for travel agency, allowing inquiry, booking of clients, and auto-reminding of clients for trips information. Please view by adding the line chatbot.',
    imageUrl: 'assets/img/travel-agent-chatbot-img.png'
  }]
}

function addWebApp() {
  return [{
      type: 'Website',
      name: 'Todo List',
      description: 'A simple todo list website that allow adding, removing and completing projects across session.',
      repo: 'https://github.com/yoyo-yeung/todo-web',
      previewUrl: 'https://github.com/yoyo-yeung/todo-web/blob/master/index.html'
    }, {
      type: 'Website',
      name: "BB Tan Game",
      description: 'A simple BB Tan game website.',
      repo: 'https://github.com/yoyo-yeung/BBTan',
      previewUrl: 'https://github.com/yoyo-yeung/BBTan/blob/master/index.html'
    },
    {
      type: 'Website',
      name: 'StackOverflow question searching',
      description: 'A site for searching StackOverflow questions using different keywords and conditions',
      repo: 'https://github.com/yoyo-yeung/StackOverflow-Search',
      previewUrl: 'https://github.com/yoyo-yeung/StackOverflow-Search/blob/master/index.html'
    }
  ]
}

function addMobileApp() {
  return [{
    type: 'Mobile App',
    name: 'Todo List',
    description: 'A simple todo list mobile application made using ionic.',
    repo: 'https://github.com/yoyo-yeung/todo-app',
    imageUrl: 'assets/img/todo-app-preview.png'
  }]
}

function createCard(project) {
  let newEle = document.createElement('div');
  $(newEle).addClass('card');
  $(newEle).html(`<h5 class='card-header'>${project.type}</h5><div class='card-body'><h5 class='card-title'>${project.name}</h5><p class='card-text'>${project.description}</p>${project.hasOwnProperty('repo')? "<a href='"+project.repo+"' class='btn btn-primary'>View the Repository</a>": ''}${project.hasOwnProperty('previewUrl')? "<a href='http://htmlpreview.github.io/?"+project.previewUrl+"' class='btn btn-secondary'>Preview</a>": ''} ${project.hasOwnProperty('imageUrl')? "<button type='button' class='btn btn-secondary' data-toggle='popover' data-placement='top' data-img='"+project.imageUrl+"' rel='popover'> Preview </button>": ''}</div></div> `);
  $(`#${parentId}`).append(newEle)
  if (project.imageUrl) appendPopOverSetting();

}

function appendPopOverSetting() {
  $('button[rel=popover]').popover({
    html: true,
    trigger: 'hover',
    content: function () {
      return '<img src="' + $(this).data('img') + '" />';
    }
  });
}
