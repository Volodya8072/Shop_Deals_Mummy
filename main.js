window.onload = function() {
  const breadcrumbPath = document.getElementById('breadcrumb-path');
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  
  if (category && breadcrumbPath) {
      const decodedCategory = decodeURIComponent(category); // clothing-shoes-&-accessories
      const formattedCategory = decodedCategory.replace(/-/g, ' '); // clothing shoes & accessories
      breadcrumbPath.textContent = formattedCategory;
      breadcrumbPath.href = `${category}.html`; // Замініть на ваш реальний URL
  } else if (breadcrumbPath) {
      breadcrumbPath.textContent = 'Index';
      breadcrumbPath.href = 'index.html';
  }
};


document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо параметри URL
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category"); // Отримуємо значення category

  if (category) {
    // Знаходимо всі посилання в навігації
    document.querySelectorAll(".close-tab").forEach((tab) => {
      const href = tab.getAttribute("href"); // Отримуємо href елемента

      // Перевіряємо, чи містить href значення категорії
      if (href && href.includes(category)) {
        tab.classList.remove("close-tab"); // Видаляємо клас close-tab
        tab.classList.add("open-tab"); // Додаємо клас open-tab
      }
    });
  }
});

const dealsDepartment = document.getElementById("deals-department");
const dateInput = document.querySelector("#datepicker1");
const calendarTrigger = document.querySelector(".deal-calendar");

const today = new Date();
today.setHours(0, 0, 0, 0);

const datepicker = new Datepicker(dateInput, {
  autohide: false, // Вимикає автоматичне закриття, щоб залишався активним
  format: "yyyy-mm-dd",
  todayHighlight: true,
  clearButton: false,
  weekStart: 0,
  language: "en",
  beforeShowDay: function (date) {
    return {
      enabled: date <= today,
    };
  },
});

// Автоматичне відкриття календаря
function keepDatepickerActive() {
  datepicker.show();
}

// Відкриття календаря при завантаженні сторінки
document.addEventListener("DOMContentLoaded", keepDatepickerActive);

// Відкриття календаря при натисканні на .deal-calendar
calendarTrigger.addEventListener("click", keepDatepickerActive);

// Запобігання закриттю календаря, якщо він втрачає фокус
dateInput.addEventListener("blur", (event) => {
  if (!document.querySelector(".datepicker-dropdown")) {
    return;
  }
});

// Перехід на сторінку при виборі дати
dateInput.addEventListener("changeDate", (event) => {
  const selectedDate = event.target.value;
  if (selectedDate) {
    window.location.href = `card.html?date=${selectedDate}`;
  }
});



document.querySelectorAll('.heard-icon').forEach(icon => {
  icon.addEventListener('click', () => {
      icon.classList.toggle('active');
  });
});






const calendarBtn = document.querySelector(".calendar-btn");
const dateInput2 = document.querySelector("#datepicker2");

today.setHours(0, 0, 0, 0);

const datepicker2 = new Datepicker(dateInput2, {
  autohide: true,
  format: "yyyy-mm-dd",
  todayHighlight: true,
  weekStart: 0,
  language: "en",
  clearButton: false,
  beforeShowDay: function (date) {
    return {
      enabled: date <= today,
    };
  },
});

calendarBtn.addEventListener("click", () => {
  if (dateInput2.classList.contains("active")) {
    datepicker2.hide(); // Закриває календар вручну
    dateInput2.classList.remove("active");
    calendarBtn.classList.remove("active");
  } else {
    datepicker2.show(); // Відкриває календар
    dateInput2.classList.add("active");
    calendarBtn.classList.add("active");
  }
});

// Закриває календар при втраті фокусу (тільки якщо воно відбувається не через кнопку)
dateInput2.addEventListener("blur", () => {
  setTimeout(() => {
    if (!document.querySelector(".datepicker.active")) {
      calendarBtn.classList.remove("active");
      dateInput2.classList.remove("active");
    }
  }, 200); // Коротка затримка, щоб перевірити, чи клікнули в календар
});


dateInput2.addEventListener("changeDate", (event) => {
  const selectedDate = event.target.value;
  if (selectedDate) {
    window.location.href = `card.html?date=${selectedDate}`;
  }
});

const burgerIcon = document.getElementById("burger");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");

closeMobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
  burgerIcon.classList.toggle('active')

  if (mobileMenu.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

burgerIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("open");
  burgerIcon.classList.toggle('active')
  if (mobileMenu.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

const marketBtn = document.getElementById("market-btn");
const marketPopup = document.getElementById("market-popup");

marketBtn.addEventListener("click", function (event) {
  this.classList.toggle("active");
});

const dealsDiv = document.getElementById("deals-for-us");
const dealsCartItems = document.querySelectorAll(".deals-cart");

dealsDepartment.addEventListener("click", function () {
  const dealCalendarWrapper = document.querySelector(".deal-calendar-wrapper");
  dealCalendarWrapper.classList.remove('active')
  dealsDiv.classList.remove("active");
  this.classList.toggle("active");

  // Видаляємо active у всіх deals-cart
  dealsCartItems.forEach((cart) => cart.classList.remove("active"));
});

dealsCartItems.forEach((cart) => {
  cart.addEventListener("click", function () {
    this.classList.toggle("active");
    dealsDepartment.classList.remove("active");
  });
});



dealsDiv.addEventListener("click", function () {
  const dealCalendarWrapper = document.querySelector(".deal-calendar-wrapper");
  dealCalendarWrapper.classList.remove('active')
  dealsDepartment.classList.remove("active")
  dealsDiv.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

$(document).ready(function () {
  if ($(".slider").length > 0) { // Перевірка, чи існує елемент з класом "slider"
    $(".slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4.04,
          },
        },
        {
          breakpoint: 810,
          settings: {
            slidesToShow: 3.04,
          },
        },
        {
          breakpoint: 570,
          settings: {
            slidesToShow: 2.04,
          },
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  } else {
    console.log("Елемент .slider не знайдено!");
  }
});


$(document).ready(function () {
  if ($(".slider-comments").length > 0) { // Перевірка, чи існує елемент з класом "slider-comments"
    $(".slider-comments").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      prevArrow: false,
      nextArrow:
        '<button type="right-button" class="slick-next"><img src="./images/red-arrow.svg"/></button>',
      responsive: [
        {
          breakpoint: 994,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  } else {
    console.log("Елемент .slider-comments не знайдено!");
  }
});



document.querySelectorAll(".input-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const customCheckbox = this.closest(".custom-checkbox");
    if (this.checked) {
      customCheckbox.classList.add("active");
    } else {
      customCheckbox.classList.remove("active");
    }
  });
});

document.querySelectorAll(".filter-triger").forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const filterShadow = this.closest(".filter-shadow"); // Знаходимо найближчий .filter-shadow
    filterShadow.classList.toggle("active"); // Додаємо/видаляємо клас 'active'
  });
});


function toggleActiveClass() {
  const elements = document.querySelectorAll('.filter-shadow');
  if (window.innerWidth <= 991) {
      elements.forEach(el => el.classList.add('active'));
  } else {
      elements.forEach(el => el.classList.remove('active'));
  }
}

// Викликати функцію при завантаженні сторінки
window.addEventListener('load', toggleActiveClass);

// Викликати функцію при зміні розміру вікна
window.addEventListener('resize', toggleActiveClass);


document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("rangeInput");
  const output = document.getElementById("output");

  if (!rangeInput || !output) {
      console.error("Елемент #rangeInput або #output не знайдено!");
      return;
  }

  // Функція для оновлення фону rangeInput
  function updateRangeBackground() {
      const value = ((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) * 100;
      rangeInput.style.background = `linear-gradient(to right, #BC0D2A 0%, #990B23 ${value}%, #E5E5E5 ${value}%, #E5E5E5 100%)`;
  }

  // Оновлюємо фон при зміні значення в rangeInput
  rangeInput.addEventListener("input", function () {
      output.value = rangeInput.value;  // Оновлюємо значення в output
      updateRangeBackground();  // Оновлюємо фон
  });

  // Оновлюємо rangeInput при введенні значення в output
  output.addEventListener("input", function () {
      rangeInput.value = output.value;  // Оновлюємо значення в rangeInput
      updateRangeBackground();  // Оновлюємо фон
  });

  // Оновити фон при завантаженні сторінки
  updateRangeBackground();
});


document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("rangeInput");
  const output = document.getElementById("output");

  if (!rangeInput || !output) {
      console.error("Елемент .rangeInput або #output не знайдено!");
      return;
  }

  // Оновлюємо output при зміні значення в rangeInput
  rangeInput.addEventListener("input", function () {
      output.value = rangeInput.value;  // Оновлюємо значення в output
  });

  // Оновлюємо rangeInput при введенні значення в output
  output.addEventListener("input", function () {
      rangeInput.value = output.value;  // Оновлюємо значення в rangeInput
  });

  // Оновити output при завантаженні сторінки
  output.value = rangeInput.value;
});



const paginationContainer = document.querySelector(".pagination-items");
const prevArrow = document.querySelector(".pagination-arrow[style*='rotate(180deg)']");
const nextArrow = document.querySelector(".pagination-arrow:not([style*='rotate(180deg)'])");
const paginationInput = document.querySelector(".pagination-input");
const paginationButton = document.querySelector(".pagination-button");

document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".pagination-items > div");
    const prevArrow = document.querySelector(".pagination-arrow:first-of-type");
    const nextArrow = document.querySelector(".pagination-arrow:last-of-type");
  
    if (!paginationContainer || !prevArrow || !nextArrow) {
        console.error("Один або кілька елементів пагінації не знайдено!");
        return;
    }
  
    function updatePagination() {
        const activePage = document.querySelector(".pagination-items > div.active-page");
        if (!activePage) return;
  
        const activeIndex = Array.from(pages).indexOf(activePage);
  
        prevArrow.classList.toggle("disabled", activeIndex === 0);
        nextArrow.classList.toggle("disabled", activeIndex === pages.length - 1);
    }
  
    pages.forEach((page) => {
        page.addEventListener("click", function () {
            pages.forEach((p) => {
                p.classList.remove("active-page");
                p.classList.add("not-active-page");
            });
  
            this.classList.add("active-page");
            this.classList.remove("not-active-page");
  
            updatePagination();
        });
    });
});

function renderPagination() {
    if (!paginationContainer || !prevArrow || !nextArrow) {
        console.error("Один або кілька елементів пагінації не знайдено!");
        return;
    }
    
    paginationContainer.innerHTML = "";
    let pages = [];
    
    if (currentPage <= 4) {
        pages = [1, 2, 3, 4, 5, '...', totalPages];
    } else if (currentPage >= totalPages - 3) {
        pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    }

    pages.forEach(page => {
        const pageElement = document.createElement("div");
        pageElement.classList.add("d-flex", "justify-content-center", "align-items-center", "scale-animation");
        if (page === currentPage) {
            pageElement.classList.add("active-page");
        } else if (page !== '...') {
            pageElement.classList.add("not-active-page");
            pageElement.addEventListener("click", () => {
                currentPage = page;
                renderPagination();
            });
        }
        
        const p = document.createElement("p");
        p.classList.add("p4");
        p.textContent = page;
        pageElement.appendChild(p);
        paginationContainer.appendChild(pageElement);
    });

    prevArrow.classList.toggle("disabled", currentPage === 1);
    nextArrow.classList.toggle("disabled", currentPage === totalPages);
}

if (prevArrow) {
    prevArrow.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderPagination();
        }
    });
}

if (nextArrow) {
    nextArrow.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPagination();
        }
    });
}

if (paginationButton && paginationInput) {
    paginationButton.addEventListener("click", () => {
        const pageNumber = parseInt(paginationInput.value, 10);
        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
            currentPage = pageNumber;
            renderPagination();
        }
    });
}

renderPagination();


const openBtn = document.getElementById("open-btn-mobile");
const submitModal = document.getElementById("submit-modal");

if (openBtn && mobileMenu && submitModal) {
  openBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("open");
    submitModal.classList.add("active");
    burgerIcon.classList.toggle('active')
  });
} else {
  console.warn("Один або кілька елементів не знайдено!");
}

const openBtnDesktop = document.getElementById("open-btn");
const closeButtons = document.querySelectorAll(".close-btn");

if (openBtnDesktop && submitModal) {
  openBtnDesktop.addEventListener("click", function() {
    submitModal.classList.add("active");
  });
} else {
  console.warn("Кнопка відкриття або модальне вікно не знайдені!");
}

if (closeButtons.length > 0 && submitModal) {
  closeButtons.forEach(button => {
    button.addEventListener("click", function() {
      submitModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
} else {
  console.warn("Кнопки закриття або модальне вікно не знайдені!");
}




document.addEventListener("DOMContentLoaded", function () {
  const modalCategory = document.getElementById("modal-category");
  const modalDropdown = document.querySelector(".modal-dropdown");
  const closeButtons = document.querySelectorAll(".submit-modal-dropdown-close");
  
  if (!modalCategory || !modalDropdown) {
      console.error("Елемент #modal-category або .modal-dropdown не знайдено!");
      return;
  }

  // Перемикаємо клас active при натисканні на #modal-category
  modalCategory.addEventListener("click", function () {
      modalDropdown.classList.toggle("active");
  });

  // Закриваємо modal-dropdown та замінюємо текст в .submit-modal-dropdown-category на текст з .submit-modal-dropdown-close
  closeButtons.forEach((button) => {
      button.addEventListener("click", function () {
          modalDropdown.classList.remove("active");

          // Знайдемо всі елементи .submit-modal-dropdown-category
          const categoryTexts = document.querySelectorAll(".submit-modal-dropdown-category");
          
          // Замінимо текст у всіх елементах на текст з натиснутого .submit-modal-dropdown-close
          categoryTexts.forEach((categoryText) => {
              categoryText.textContent = button.textContent; // використання тексту кнопки
          });
      });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("submit-modal-dropdown");
  const submitButton = document.querySelector(".submit-modal-button");

  // Функція для оновлення класу кнопки
  function updateButtonClass() {
    if (inputField.value.trim() === "") {
      // Якщо поле порожнє, додаємо клас до кнопки
      submitButton.classList.add("disabled");
    } else {
      // Якщо поле не порожнє, забираємо клас з кнопки
      submitButton.classList.remove("disabled");
    }
  }

  // Додаємо подію input, щоб перевіряти введений текст
  inputField.addEventListener("input", updateButtonClass);

  // Викликаємо функцію для перевірки стану класу на початку
  updateButtonClass();
});


document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("open-modal-btn");
  const closeButtons = document.querySelectorAll(".modal-report-close-btn");
  const modalContainer = document.querySelector(".report-modal-container");

  // Перевіряємо наявність елементів
  if (!openButton) {
    console.error("Кнопка 'open-modal-btn' не знайдена!");
    return;
  }

  if (closeButtons.length === 0) {
    console.error("Кнопки 'modal-report-close-btn' не знайдені!");
    return;
  }

  if (!modalContainer) {
    console.error("Елемент 'report-modal-container' не знайдений!");
    return;
  }

  // Додаємо клас active при натисканні кнопки open
  openButton.addEventListener("click", function () {
    modalContainer.classList.add("active");
  });

  // Знімаємо клас active при натисканні будь-якої кнопки закриття
  closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
      modalContainer.classList.remove("active");
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const categoryWrapper = document.getElementById('report-modal-dropdown-category-wrapper');
  const dropdown = document.querySelector('.report-modal-dropdown');
  const closeButtons = document.querySelectorAll('.report-modal-dropdown-close');
  const categoryText = document.querySelector('.report-modal-dropdown-category');

  // Перевіряємо наявність елементів
  if (!categoryWrapper) {
    console.error("Елемент 'report-modal-dropdown-category-wrapper' не знайдений!");
    return;
  }

  if (!dropdown) {
    console.error("Елемент 'report-modal-dropdown' не знайдений!");
    return;
  }

  if (closeButtons.length === 0) {
    console.error("Кнопки 'report-modal-dropdown-close' не знайдені!");
    return;
  }

  if (!categoryText) {
    console.error("Елемент 'report-modal-dropdown-category' не знайдений!");
    return;
  }

  // Додати/забрати клас "active" при кліку на categoryWrapper
  categoryWrapper.addEventListener('click', () => {
    dropdown.classList.toggle('active');
  });

  // Змінити текст і забрати "active" при кліку на closeButton
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      dropdown.classList.remove('active');
      categoryText.textContent = button.textContent;
    });
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("report-modal-dropdown");
  const submitButton = document.querySelector(".report-modal-button");

  if (!inputField || !submitButton) {
    console.warn("Поле вводу або кнопка не знайдені!");
    return; // Зупиняємо виконання скрипта, якщо потрібні елементи відсутні
  }

  // Функція для оновлення класу кнопки
  function updateButtonClass() {
    if (inputField.value.trim() === "") {
      // Якщо поле порожнє, додаємо клас до кнопки
      submitButton.classList.add("disabled");
    } else {
      // Якщо поле не порожнє, забираємо клас з кнопки
      submitButton.classList.remove("disabled");
    }
  }

  // Додаємо подію input, щоб перевіряти введений текст
  inputField.addEventListener("input", updateButtonClass);

  // Викликаємо функцію для перевірки стану класу на початку
  updateButtonClass();
});


document.addEventListener('DOMContentLoaded', () => {
  const emailInputs = document.querySelectorAll('.input-mail');
  const emailButtons = document.querySelectorAll('.email-btn');

  // Регулярний вираз для перевірки правильності email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Функція для оновлення статусу кнопки
  function updateEmailButtonState() {
    emailInputs.forEach((input, index) => {
      const button = emailButtons[index]; // Знаходимо відповідну кнопку для кожного інпуту

      // Перевіряємо, чи поле не порожнє і чи email правильний
      if (input.value.trim() === "" || !emailRegex.test(input.value)) {
        button.classList.add('disabled'); // Додаємо клас disabled
      } else {
        button.classList.remove('disabled'); // Прибираємо клас disabled
      }
    });
  }

  // Оновлюємо статус кнопки при введенні тексту в поле
  emailInputs.forEach(input => {
    input.addEventListener('input', updateEmailButtonState);
  });

  // Ініціалізуємо статус кнопок на завантаження сторінки
  updateEmailButtonState();
});


document.querySelectorAll('.star-rating:not(.readonly) label').forEach(star => {
  star.addEventListener('click', function() {
      this.style.transform = 'scale(1.2)';
      setTimeout(() => {
          this.style.transform = 'scale(1)';
      }, 200);
  });
});


const smallImages = document.querySelectorAll('.card-small-image');
// Отримуємо велике зображення
const largeImage = document.querySelector('.card-head-image');

// Перевірка на наявність зображень
if (smallImages.length > 0 && largeImage) {
    // Додаємо обробник події на кожне маленьке зображення
    smallImages.forEach(image => {
        image.addEventListener('click', () => {
            // Змінюємо src великого зображення на src натиснутого маленького зображення
            largeImage.src = image.src;
        });
    });
} else {
    console.log('Не знайдено зображення або велике зображення відсутнє.');
}





$(document).ready(function() {
  $("#lightgallery").lightGallery(); 
});


document.addEventListener("DOMContentLoaded", function () {
  const dealCalendar = document.querySelector(".deal-calendar");
  const dealCalendarWrapper = document.querySelector(".deal-calendar-wrapper");

  dealCalendar.addEventListener("click", function () {
    dealsDiv.classList.remove("active");
    dealsDepartment.classList.remove("active")
      dealCalendarWrapper.classList.toggle("active");
  });
});

document.querySelector('.clear-filters-btn').addEventListener('click', () => {
  document.querySelectorAll('.custom-checkbox').forEach(checkbox => {
      checkbox.classList.remove('active');
  });

  document.querySelectorAll('.input-checkbox').forEach(input => {
      input.checked = false;
  });
});
