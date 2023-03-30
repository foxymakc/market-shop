import testImg from "../image/1.jpg";

//NavCatalog
export const listCategoryForCatalog = [
  { id: 1, category: "Электроника", src: "electronika" },
  { id: 2, category: "Химия", src: "himia" },
  { id: 3, category: "Инструменты", src: "instryment" },
];

// Requisites
export const listRequisites = [
  { title: "Полное наименование", subtitle: "Market Shop" },
  { title: "Генеральный директор", subtitle: "Иванов Иван" },
  { title: "Наименование банка", subtitle: "Банк" },
  { title: "Корреспондентский счет", subtitle: "11111111" },
  { title: "БИК", subtitle: "11111111" },
  { title: "Расчетный счет", subtitle: "111111" },
  { title: "ИНН", subtitle: "1111111" },
  { title: "КПП", subtitle: "11111" },
  { title: "ОГРН", subtitle: "111111" },
  {
    title: "Юридический адреc",
    subtitle: "111111, Московская область, г.М, деревня М, ул.М, д. 1, стр. 1",
  },
];

// Footer
export const listLinkBuyers = [
  { name: "Как сделать заказ", src: "how-make-order" },
  { name: "Способ оплаты", src: "payment-methods" },
  { name: "Возврат товара", src: "purchase-returns" },
];

export const listLinkCompany = [
  { name: "О нас", src: "about-us" },
  { name: "Реквизиты", src: "requisites" },
  { name: "Контакты", src: "our-contacts" },
];

export const listLinkSotial = [
  { name: "WhatsApp", src: "https://web.whatsapp.com/" },
  { name: "Telegram", src: "https://web.telegram.org/" },
];

// MenuMobile
export const listNavMenuMobile = [
  {
    id: "home",
    src: "/",
    classDeff: "menu-mobile__src-home",
    classActive: "menu-mobile__src-home-active",
  },
  {
    id: "basket",
    src: "/basket",
    classDeff: "menu-mobile__src-basket",
    classActive: "menu-mobile__src-basket-active",
  },
  {
    id: "like",
    src: "/like",
    classDeff: "menu-mobile__src-like",
    classActive: "menu-mobile__src-like-active",
  },
  {
    id: "profile",
    src: "/profile",
    classDeff: "menu-mobile__src-profile",
    classActive: "menu-mobile__src-profile-active",
  },
];

//HowMakeOrder
export const listHowMakeOrder = [
  { id: "1", text: "Выберите товары и добавьте их в корзину." },
  {
    id: "2",
    text: "Перейдите в раздел Корзина и нажмите Перейти к оформлению.",
  },
  {
    id: "3",
    text: "Укажите ваши данные. Если вы не авторизованы, авторизуйтесь с помощью номера телефона или почты.",
  },
  { id: "4", text: "Выберите способ оплаты." },
  { id: "5", text: "Оплатите заказ онлайн или при получений." },
];

//PaymentMethods
export const listPaymentMethods = [
  {
    id: "1",
    title: "Банковская карта",
    text: "Оплата банковской картой, через Интернет, возможна через системы электронных платежей. Номер карты (PAN) должен иметь не менее 15 и не более 19 символов. Мы принимаем платежи с сайта по следующим банковским картам : Visa, Mastercard, МИР.",
  },
  {
    id: "2",
    title: "Оплата через СБП (Систему быстрых платежей)",
    text: `Система быстрых платежей (далее "СБП") - сервис платежной системы Банка России, позволяющий физическим лицам производить оплату за товар/услуги с помощью любого банка-участника СБП.Список банков-участников опубликован на официальном сайте https://sbp.nspk.ru/participants/ Безопасность переводов обеспечивается на стороне всех банков-участников СБП: банков, Банка России и НСПК с использованием современных систем защиты. СБП соответствует всем стандартам информационной безопасности.`,
  },
  {
    id: "3",
    title: "Оплата наличными или картой при получении",
    text: "Оплатите товары при получении в нашем магазине.",
  },
];

//PurchaseReturns
export const listPurchaseReturns = [
  {
    id: "1",
    title: "Условия возврата",
    text: "Товар принимается к возврату только в полной комплектации, со всеми упаковками и наклейками, в неношеном/неиспользованном виде.",
  },
  {
    id: "2",
    title: "Причины возврата",
    text: "Не подошел размер, фасон, цвет, длина и т.п",
  },
  {
    id: "3",
    title: "Срок возврата",
    text: "Срок возврата товара надлежащего качества составляет 14 дней с момента получения товара, если иное не было оговорено при продаже товара.",
  },
  {
    id: "4",
    title: "Как вернуть товар",
    text: "Покупатель может самостоятельно вернуть неподошедший товар в нашем магазине.",
  },
];

//Shop
export const shopFilterList = [
  {
    id: 1,
    name: "Популярные",
    meaning: "popular",
  },
  {
    id: 2,
    name: "Новинки",
    meaning: "new",
  },
  {
    id: 3,
    name: "Сначала дешёвые",
    meaning: "cheap",
  },
  {
    id: 4,
    name: "Сначала дорогие",
    meaning: "expensive",
  },
];

//////////////////////////////////////////////
export const listProduct = [
  {
    id: 1,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 1,
    date: "023-07-09T23:00:00",
    category: "electronika"
  },
  {
    id: 2,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1001",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 1,
    date: "023-07-09T23:00:00",
    category: "electronika"
  },
  {
    id: 3,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1020",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 1,
    date: "023-07-08T23:00:00",
    category: "electronika"
  },
  {
    id: 4,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1100",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 1,
    date: "023-07-03T23:00:00",
    category: "himia",
  },
  {
    id: 5,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1003",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 12,
    date: "023-07-09T23:00:00",
    category: "himia",
  },
  {
    id: 6,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1500",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 11,
    date: "023-07-09T23:00:00",
    category: "instryment",
  },
  {
    id: 7,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1300",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-09T23:00:00",
    category: "instryment",
  },
  {
    id: 8,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 1,
    date: "023-07-09T23:00:00",
    category: "instryment",
  },
  {
    id: 9,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "instryment",
  },
  {
    id: 10,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 11,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 12,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 13,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 14,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 15,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "instryment",
  },
  {
    id: 16,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "instryment",
  },
  {
    id: 17,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "instryment",
  },
  {
    id: 18,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "instryment",
  },
  {
    id: 19,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "instryment",
  },
  {
    id: 20,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 21,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 22,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00"
  },
  {
    id: 23,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 24,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
  {
    id: 25,
    name: "USB-C HUB HOCO HB26 на 4 порта 1xUSB3.0 + 3xUSB2.0",
    price: "1000",
    sale: "1200",
    img: testImg,
    imgAlt: "usb переходник",
    views: 0,
    date: "023-07-010T23:00:00",
    category: "",
  },
];
