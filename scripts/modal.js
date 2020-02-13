$(document).ready(function() {
  // MODAL
  var modalText = {
    goodviews: {
      title: "Goodviews",
      tag: "Movie Finder",
      detail:
        "An application similar to the popular website goodviews Instead of using books, we chose to use movies. The home page has a modal with movies for scrolling. On the Browse page, the user has the option to search for a movie or leaf through new releases, drama, action, horror and comedy. Once a movie is searched the poster, title, release date, plot and rating will come up. The user also has the option to favorite the movie. Once a movie is favorited it will appear in the My Titles page. We were able to get movie information by using the OMDb and TMDb APIs.",
      link: "https://limitless-taiga-99097.herokuapp.com/index.html"
    },
    burger: {
      title: "Burger Bar",
      tag: "Restaraunt Database",
      detail:
        "A restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a EAT! button. When the user clicks it, the burger will move to the right side of the page. The app will store every burger in a database, whether devoured or not.",
      link: "https://limitless-everglades-88254.herokuapp.com/"
    },
    friendFinder: {
      title: "Friend Finder",
      tag: "Find and meet new people",
      detail:
        "This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.",
      link: "https://friend-finder-home.herokuapp.com/"
    },
    liri: {
      title: "Liri",
      tag: "Node App",
      detail:
        "LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives you back data.",
      link: "https://github.com/XtraChase/liri-node-app"
    },
    giphy: {
      title: "Giphy",
      tag: "API App",
      detail:
        "A GIPHY API with a dynamic web page that populates with gifs of your choice. The GIPHY API uses JavaScript and jQuery to change the HTML of the site.",
      link: "https://xtrachase.github.io/giphy-api/"
    },
    patientPortal: {
      title: "Patient Portal",
      tag: "Collabortive Project",
      detail:
        "We took the problem of pain and opioid addiction and created an online portal for medical providers and patients to easily track treatment plans. A portal like this makes it easier for providers to keep track of patients and adjust medication with recorded data that prevents malpractice.",
      link: "https://xtrachase.github.io/pain-mangagement-portal/"
    },
    starWars: {
      title: "Star Wars RPG Game",
      tag: "Using Javascript to Manipulate the DOM",
      detail:
        "We took the problem of pain and opioid addiction and created an online portal for medical providers and patients to easily track treatment plans. A portal like this makes it easier for providers to keep track of patients and adjust medication with recorded data that prevents malpractice.",
      link: "https://xtrachase.github.io/pain-mangagement-portal/"
    },
    ccGame: {
      title: "Patient Portal",
      tag: "Javascript Crystal Collector Game",
      detail:
        "We took the problem of pain and opioid addiction and created an online portal for medical providers and patients to easily track treatment plans. A portal like this makes it easier for providers to keep track of patients and adjust medication with recorded data that prevents malpractice.",
      link: "https://xtrachase.github.io/pain-mangagement-portal/"
    },
    psychic: {
      title: "Patient Portal",
      tag: "Javascript Guessing Game",
      detail:
        "We took the problem of pain and opioid addiction and created an online portal for medical providers and patients to easily track treatment plans. A portal like this makes it easier for providers to keep track of patients and adjust medication with recorded data that prevents malpractice.",
      link: "https://xtrachase.github.io/pain-mangagement-portal/"
    },
    webScraper: {
      title: "Web Scraper",
      tag: "Tech News Website Scraper Using MongoDB",
      detail:
        "A web app that lets users view and leave comments on the latest technology news from TechCrunch.",
      link: "https://techcrunch-scraping.herokuapp.com/"
    },
    virtualImagery: {
      title: "Virtual Imagery LLC",
      tag: "Business Venture Developing Virtual Reality for Pain Management",
      detail:
        "Virtual Imagery is a personal venture of mine that has developed a virtual reality pain management program. The software is a distraction therapy with visual cues to highly engage patients in the virtual world. It features useful tools for caregivers to ease medical procedures and receive patient feedback.",
      link: "https://www.virtualimagery.net/"
    },
    emojiGame: {
      title: "Emoji Game",
      tag: "A memory game using React",
      detail: "",
      link: "https://xtrachase.github.io/clicky-game/"
    },
    activityUp: {
      title: "ActivityUP",
      tag: "A site for up-voting group activities",
      detail:
        "ActivityUP is a web app for open source event creation. Users of our site are encouraged to create or join groups and upvote activities for the group. The most upvoted activities are shown at the top of the list for the upcoming event.",
      link: "http://activityup.vote/"
    }
  };

  $("#gallery .button").on("click", function() {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function() {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function() {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function() {
    shiftSlide(-1);
  });
  $("#prev").click(function() {
    shiftSlide(1);
  });

  carousel.on("mousedown", function() {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function() {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function() {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });

    var imageTypes = [".jpg", ".png", ".gif"];

    $.each($("#modal .slide"), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" +
          id +
          "-" +
          index +
          imageTypes[1] +
          "') center center/cover",
        backgroundSize: "cover"
      });
    });
  }
});
