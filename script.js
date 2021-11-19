const sliderLine = document.querySelector('.slider_line');
let offset = 0;

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
const buttons = document.querySelector('.buttons');
let x1 = null;
let y1 = null;

document.querySelector('.slider_next').addEventListener('click', function () {
    offset = offset + 100;
    if (offset > 200) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'vw';
})

document.querySelector('.slider_prev').addEventListener('click', function () {
    offset = offset - 100;
    if (offset < 0) {
        offset = 200;
    }
    sliderLine.style.left = - offset + 'vw';
})


function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
    buttons.style.display = 'flex';
}

function handleTouchMove(event) {
    buttons.style.display = 'none';
    if (!x1 || !y1) {
        return false;
    }

    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;

    let xDif = x2 - x1;
    let yDif = y2 - y1;

    if (Math.abs(xDif) > Math.abs(yDif)) {
        if (xDif > 0) {
            offset = offset - 100;
            if (offset < 0) {
                offset = 200;
            }
            sliderLine.style.left = - offset + 'vw';
        }
        else {
            offset = offset + 100;
            if (offset > 200) {
                offset = 0;
            }
            sliderLine.style.left = - offset + 'vw';
        }
    }
    x1 = null;
    y1 = null;
}

// setInterval(() => {
//     offset = offset + 100;
//     if (offset > 200) {
//         offset = 0;
//     }
//     sliderLine.style.left = - offset + 'vw';
// }, 3000);

// ------------------------------------------------------------------------------------------------

const getS = selector => document.querySelector(selector);

getS('.wyWe').onclick = function () {
    getS('.why_we').style.display = 'flex';
    getS('.our_story').style.display = 'none';
    getS('.game_rooms').style.display = 'none';
    getS('.why_we_div_img').style.display = 'block';
    getS('.our_story_div_img').style.display = 'none';
    getS('.game_rooms_div_img').style.display = 'none';
    getS('.info_icon_game_black').style.display = 'block';
    getS('.info_icon_game_white').style.display = 'none';
    getS('.info_icon_story_black').style.display = 'none';
    getS('.info_icon_story_white').style.display = 'block';
    getS('.info_icon_room_black').style.display = 'none';
    getS('.info_icon_room_white').style.display = 'block';
    getS('.wyWe').style.color = 'black';
    getS('.ourStory').style.color = '#B9B9B9';
    getS('.gameRooms').style.color = '#B9B9B9';
    getS('.wyWe').style.border = '2px solid black';
    getS('.ourStory').style.border = '2px solid #B9B9B9';
    getS('.gameRooms').style.border = '2px solid #B9B9B9';
}

getS('.ourStory').onclick = function () {
    getS('.why_we').style.display = 'none';
    getS('.our_story').style.display = 'flex';
    getS('.game_rooms').style.display = 'none';
    getS('.why_we_div_img').style.display = 'none';
    getS('.our_story_div_img').style.display = 'block';
    getS('.game_rooms_div_img').style.display = 'none';
    getS('.info_icon_game_black').style.display = 'none';
    getS('.info_icon_game_white').style.display = 'block';
    getS('.info_icon_story_black').style.display = 'block';
    getS('.info_icon_story_white').style.display = 'none';
    getS('.info_icon_room_black').style.display = 'none';
    getS('.info_icon_room_white').style.display = 'block';
    getS('.wyWe').style.color = '#B9B9B9';
    getS('.ourStory').style.color = 'black';
    getS('.gameRooms').style.color = '#B9B9B9';
    getS('.wyWe').style.border = '2px solid #B9B9B9';
    getS('.ourStory').style.border = '2px solid black';
    getS('.gameRooms').style.border = '2px solid #B9B9B9';
}

getS('.gameRooms').onclick = function () {
    getS('.why_we').style.display = 'none';
    getS('.our_story').style.display = 'none';
    getS('.game_rooms').style.display = 'flex';
    getS('.why_we_div_img').style.display = 'none';
    getS('.our_story_div_img').style.display = 'none';
    getS('.game_rooms_div_img').style.display = 'block';
    getS('.info_icon_game_black').style.display = 'none';
    getS('.info_icon_game_white').style.display = 'block';
    getS('.info_icon_story_black').style.display = 'none';
    getS('.info_icon_story_white').style.display = 'block';
    getS('.info_icon_room_black').style.display = 'block';
    getS('.info_icon_room_white').style.display = 'none';
    getS('.wyWe').style.color = '#B9B9B9';
    getS('.ourStory').style.color = '#B9B9B9';
    getS('.gameRooms').style.color = 'black';
    getS('.wyWe').style.border = '2px solid #B9B9B9';
    getS('.ourStory').style.border = '2px solid #B9B9B9';
    getS('.gameRooms').style.border = '2px solid black';
}