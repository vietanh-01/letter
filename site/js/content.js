/**
 * Birthday Love Letter Template — editable content
 *
 * Change the values below, save the file, and refresh the page.
 * Keep photo and music paths relative to site/index.html. User-provided text is
 * inserted with textContent by main.js; HTML in these strings is not interpreted.
 */
window.SITE_CONTENT = {
  pageTitle: "A Letter for My Girl",
  description: "A customizable floral birthday greeting, photo gallery, and heartfelt letter template.",

  occasion: "Happy Women’s Day to My Prettiest Girl 🌷",
  recipientName: "Đào Giang",
  heroEyebrow: "A little celebration, made with love",
  //heroSubtitle: "Yêu em nhiều",

  galleryEyebrow: "A few favorite moments",
  galleryHeading: "Our little gallery",
  photos: [
    {
      src: "assets/placeholders/anh1.JPG",
      alt: "Floral placeholder labeled Add photo 1",
      caption: "Bức ảnh đầu tiên 💯",
      date: "21/3"
    },
    {
      src: "assets/placeholders/anh2.JPG",
      alt: "Floral placeholder labeled Add photo 2",
      caption: "Bức ảnh đầu tiên mà em khen anh chụp đẹp 😆",
      date: "6/8"
    },
    {
      src: "assets/placeholders/anh3.JPG",
      alt: "Floral placeholder labeled Add photo 3",
      caption: "Bức ảnh anh thấy em tươi nhất 🌷",
      date: "Add a date or memory"
    },
    {
      src: "assets/placeholders/anh4.JPG",
      alt: "Floral placeholder labeled Add photo 4",
      caption: "Bức ảnh đầu tiên của 2 đứa 💕",
      date: ""
    }
  ],

  letterDate: "20-10, 2026",
  salutation: "To: Người Anh Yêu",
  letterParagraphs: [
    "Chữ tay anh khum đẹp nên anh tạo ra bức thư này.",
    "Anh chỉ muốn nói rằng anh yêu em rất nhiều và bức thư này là cách để anh thể hiện điều đó.",
    "Trước đây những dịp lễ như ngày này anh thường không quá để tâm nhưng bây giờ anh lại thấy trong anh có 1 chút gì đấy hào hứng. Chắc có lẽ bởi vì anh biết rằng anh lại được trải qua 1 cột mốc nữa với em.",
    "Anh chúc em bé của anh ngày 20/10 ý nghĩa, chúc em luôn xinh đẹp, giỏi giang và luôn nắm tay cùng anh tiến về phía trước nheee."
  ],
  signature: "With love, Viet Anhh ♥️",
  footerText: "Made with care — customize every word and memory.",

  petals: {
    enabled: true,
    count: 24,
    colors: ["#ed9fb1", "#f5bdc9", "#df879d", "#f8d7de"]
  },
  confetti: {
    enabled: true,
    count: 90,
    colors: ["#bc6f83", "#d99856", "#f0b6c3", "#7f9b76", "#f4d7a7"]
  },

  // Music stays off until enabled and given a file. Only publish audio you are licensed to share.
  music: {
    enabled: false,
    file: "",
    title: "Your licensed song",
    delayedPlayback: {
      enabled: true,
      delayMs: 3000
    }
  }
};
