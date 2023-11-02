// ============ Header =========
const header = document.createElement('header')
const header_top_block = document.createElement('div')
header_top_block.classList.add('header_top_block')
const logo = document.createElement('img')
logo.src = '../images/logo1.png'
logo.alt = 'logo'
const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

const navigation = document.createElement('nav')
const menu = document.createElement('ul')
menu.classList.add('menu')
const menuArr = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']
for (let i = 0; i < menuArr.length; i++) {
    const li = document.createElement('li')
    const link = document.createElement('a')
    link.classList.add('menu_item')
    link.textContent = menuArr[i]
    li.append(link)
    menu.append(li)
}

// =============main================
const main = document.createElement('main')
// =================================

// ========= section1 ===============
const section1 = document.createElement('section')
section1.classList.add('quest_section')

for (let i = 0; i < 3; i++) {
    const questCard = document.createElement('div')
    questCard.classList.add('quest_card')
    const questImg = document.createElement('img')
    questImg.src = '../images/question.png'
    questImg.alt = 'question'
    const question = document.createElement('p')
    question.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'
    questCard.append(questImg, question)
    section1.append(questCard)
}
// ================================

// =========== section2 ==============
const section2 = document.createElement('section')
section2.classList.add('app_section')
const app_test = document.createElement('h2')
app_test.classList.add('title')
app_test.textContent = 'О приложении'
const about_img = document.createElement('div')
about_img.classList.add('about_img')
const video = document.createElement('img')
video.classList.add('video')
video.src = '../images/table.png'
video.alt = 'table'
const play = document.createElement('img')
play.classList.add('play')
play.src = '../images/play-button.png'
play.alt = 'click'
// ====================================

// ============section3================
const section3 = document.createElement('section')
section3.classList.add('questt')
for (let i = 0; i < 5; i++) {
    const imageQ = document.createElement('img')
    imageQ.classList.add('questi')
    imageQ.src = '../images/questionnn.png'
    imageQ.alt = 'qu'
    section3.append(imageQ)
}
// =====================================

// ========= section4 ==================
const section4 = document.createElement('section')
section4.classList.add('about_project')
const project = document.createElement('h2')
project.classList.add('title')
project.textContent = 'О проекте'
const project_p = document.createElement('div')
project_p.classList.add('project_p')
const text = document.createElement('p')
text.classList.add('project_text')
text.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за
6 недель. Опытные
бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития
их
бизнеса: от разработки идеи до ее реализации`
// =====================================

// =========== section5 ================
const section5 = document.createElement('section')
section5.classList.add('download')
const save = document.createElement('h2')
save.classList.add('title')
save.textContent = 'Скачать'
const save_div = document.createElement('div')
save_div.classList.add('save_img')
const android = document.createElement('img')
android.classList.add('download_img')
android.src = '../images/android.png'
android.alt = 'android'
const qr_code = document.createElement('img')
qr_code.classList.add('download_img')
qr_code.src = '../images/icon.png'
qr_code.alt = 'qr_code'
const saveDiv2 = document.createElement('div')
const save_p = document.createElement('p')
save_p.classList.add('save_p')
save_p.textContent = `Курс для начинающих предпринимателей, направленный на качественный результат за 6
недель. Опытные
бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их
бизнеса: от разработки идеи до ее реализации.`
// ===================================

// =============footer================
const footer = document.createElement('footer')
footer.classList.add('footer_wp')
const footer_title = document.createElement('h2')

footer_title.classList.add('footer_title')
footer_title.textContent = 'SOME'

const social_block = document.createElement('div')
social_block.classList.add('social_block')
const footer_vk = document.createElement('img')
footer_vk.classList.add('footer_img')
footer_vk.src = '../images/vk.png'
footer_vk.alt = 'vk'
const footer_inst = document.createElement('img')
footer_inst.classList.add('footer_img')
footer_inst.src = '../images/instagram (1).png'
footer_inst.alt = 'inst'
const facebook = document.createElement('img')
facebook.classList.add('footer_img')
facebook.src = '../images/facebook.png'
facebook.alt = 'facebook'

const footer_block = document.createElement('div')
footer_block.classList.add('footer_block')

const footer_num = document.createElement('div')
footer_num.classList.add('footer_text')
const footer_h = document.createElement('h3')
footer_h.classList.add('footer_h')
footer_h.textContent = 'Контакты'
const footer_a_left = document.createElement('a')
footer_a_left.classList.add('footer_a_left')
footer_a_left.textContent = `Tel.: +996 (312) 915000 + Еxt.
Fax: +996 (312) 915 028`

const adres = document.createElement('div')
adres.classList.add('footer_text')
const text_footer = document.createElement('h3')
text_footer.classList.add('footer_h')
text_footer.textContent = 'Адреса'
const footer_p = document.createElement('p')
footer_p.classList.add('footer_p')
footer_p.textContent = `American University of Central Asia
7/6 Aaly Tokombaev Street
Bishkek, Kyrgyz Republic 720060`

const help = document.createElement('div')
help.classList.add('footer_text')
const help_h3 = document.createElement('h3')
help_h3.textContent = 'Помощь'
help_h3.classList.add('footer_h')
help.append(help_h3)


for (let i = 0; i < 3; i++) {
    const helpArr = document.createElement('a')
    helpArr.classList.add('footer_a')
    helpArr.textContent = 'Помощь'
    help.append(helpArr)
}
// ============add in HTML============\
const body = document.body
body.append(header, main, footer)
header.append(header_top_block, navigation, menu)
header_top_block.append(logo, h1)
navigation.append(menu)
main.append(section1, section2, section3, section4, section5)
section2.append(app_test, about_img)
about_img.append(video, play)
section4.append(project, text)
section5.append(save, save_div, saveDiv2, save_p)
save_div.append(android, qr_code)
footer.append(footer_title, social_block, footer_block)
social_block.append(footer_vk, footer_inst, facebook)
footer_block.append(footer_num, adres, help)
footer_num.append(footer_h, footer_a_left)
adres.append(text_footer, footer_p)