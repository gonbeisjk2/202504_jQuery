
// document.querySelector('h1').style.color = 'green';
$('h1').css('color', 'green');//1: プロパティ名, 2: 値


// Lesson4
$('.mv-copy').next().css('text-decoration', 'underline');
$('.mv-subcopy').prev().css('font-weight', 'bold');
$('.service-card').parent().css('border', '1px solid orange');
$('.site-footer-sns').children().css('color', 'orange');
// $('.works-panel').find('.works-title').css('border-bottom', '2px solid #000');
$('.contact-logo').closest('div').css('background', '#eee');

// Lesson5
// $('.works-container')
//   .css('border', '4px solid #000')
//   .find('.works-thumb').css('opacity', '0.5')
//   .next().css('background-color', 'rgba(255 220 0 / .5)')
//   .children().css('text-decoration', 'underline');

// Lesson 6
const tweet = '<div class="tweet-content">イエローマジックデザインワークショップを開催しました。「普段何気なく使っているモノの見方を変えて見る」をテーマに、参加者のいろんなアイデアと作品が生まれました。</div>';

const $tweetContainer = $('.tweet-container');

// $tweetContainer.append(tweet);
// $tweetContainer.prepend(tweet);
// $tweetContainer.before(tweet);
// $tweetContainer.after(tweet);
// $tweetContainer.html(tweet);
// $tweetContainer.text(tweet);

// Lesson 7
let display = true;

$('#quick-news-btn').on('click', e => {
  const $content = $('.quick-news-content');

  if (display) {
    // ニュースが表示されている時の処理＝＞隠す
    $content.wrap('<div class="hidden">');
    $(e.target).text('＋ ニュースを開く');
    display = false;
  } else {
    // ニュースが隠れている時の処理＝＞表示する
    $content.unwrap(); //親要素を取り去る
    $(e.target).text('× ニュースを閉じる');
    display = true;
  }
});

// Lesson 8
// $('.works-desc').empty();
$('.works-desc').remove();

// Lesson 9
const $workimg = $('.works-thumb img');
// $workimg.removeAttr('alt');
console.log($workimg.attr('alt'));
$workimg.attr('alt', 'アンティーク家具ショップ');
$workimg.attr('id', 'works-antique');

// Lesson 10
const $serviceicon = $('.service-icon');
$serviceicon.css({
  'color': 'green',
  'font-size': '120px',
  'opacity': '0.8',
});

// Lesson 11
// $('.faq-openclose').addClass('is-open');
// $('.faq-openclose').removeClass('is-open');
// $('.faq-openclose').toggleClass('is-open');

// Lesson 12
// $('.faq-openclose').on('click', e => {
//   $(e.target).toggleClass('is-open');
// });

// Lesson 14
// $('.faq-list *').on('click', e => {
//   e.stopPropagation();
//   // console.log(e.target);
//   console.log(e.type);
// });

const $mouseFollow = $('.mouse-follow');
$(window).on('mousemove', e => {
  // console.log(e.clientX, e.clientY);
  $mouseFollow.css({
    'left': e.clientX,
    'top': e.clientY,
  });
});

// Lesson 15
$('.mv-copy').on('click', e => {
  $(e.target)
    .animate({
      'font-size': '100px',
    })
    .animate({
      'font-weight': 700
    })
    .animate({
      'height': 'hide'
    });
});

$('.pagetop').on('click', () => {
  $('html').animate({
    'scrollTop': 0,
  }, 1000);
});

// Lesson 16
$('.tweet-show').on('click', () => {
  $('.tweet-content-ls16').fadeIn(1000, function () {
    $(this).css('background-color', 'yellow');
  });
});

$('.tweet-hide').on('click', () => {
  $('.tweet-content-ls16').fadeOut();
});

// Lesson 17
$('.faq-openclose').on('click', e => {
  const dd = $(e.target).parent().next();

  // if (dd.is(':visible')) {
  //   dd.slideUp();
  // } else {
  //   dd.slideDown();
  // }
  $(e.target).toggleClass('is-open');
  dd.stop().slideToggle(!dd.is(':visible'));
});

// Lesson 19
const tweets = [
  '「DX支援」に当社のサービスがお役に立てるかもしれません。',
  '良いデザインはどっち？ クイズを解くだけで、デザインの知識がどんどん身につく画期的なデザイン手法を紹介',
  '現場監督からWebデザイナーに転職。建築現場責任者として活躍されていた川本さんのキャリアチェンジの理由は？',
  'Webデザインの勉強やトレンドキャッチに役立つSNSアカウントおすすめ25選'
];

const tweetContent = $('.tweet-content-ls19');
let counter = 0;

tweetContent.text(tweets[counter]).fadeIn();

setInterval(() => {
  tweetContent.text(tweets[counter]).fadeOut(400, () => {
    counter++;
    if (counter === tweets.length) {
      counter = 0;
    }
    tweetContent.text(tweets[counter]).fadeIn();
  });
}, 3000);


// Lesson 20
const serviceList = $('.service-list');
$(window).on('scroll', () => {
  const isInView = serviceList.inView('topOnly', 150);

  if (isInView && !serviceList.hasClass('in-view')) {
    serviceList.addClass('in-view');
  }
});

// Lesson 20 slick
$('.works-container').slick({
  arrows: true,//前後の矢印を表示する
  autoplay: true, //自動スライドを有効化する
  autoplaySpeed: 1500,//スライドを表示する時間（ミリ秒)
  dots: true,//ページネーションを表示する
  // fade: true, //フェードアニメーションにする
  // slidesToShow: 2, //１回に表示するパネルの枚数
  speed: 800,//スライドアニメーションの時間（ミリ秒）
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
      }
    }
  ],
});