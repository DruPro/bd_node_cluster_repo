let rotation_count = 0;
let guide_rotation_count = getRndInteger(1,6);

const m_image = document.getElementById('main_img');
const g_image = document.getElementById('guide_img');
const cfrm_bttn = document.getElementById('enter_bttn')


rotate__guide_img()

m_image.addEventListener('click',() => {rotate__main_img()});
cfrm_bttn.addEventListener('click',() => {check()});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function check()
{
    if (rotation_count === guide_rotation_count)
    {
        location.assign('public/confirmation.html')
    }
    else {
        alert('Please follow the instructions');
    }
}

function rotate__main_img()
{
    rotation_count = rotation_count + 1;
    switch (rotation_count) {
        case 1:
            m_image.style.transform = 'rotate(60deg)';

            break;
        case 2:
            m_image.style.transform = 'rotate(120deg)';

            break;
        case 3:
            m_image.style.transform = 'rotate(180deg)';

            break;
        case 4:
            m_image.style.transform = 'rotate(240deg)';

            break;
        case 5:
            m_image.style.transform = 'rotate(300deg)';

            break;
        case 6:
            m_image.style.transform = 'rotate(360deg)';
            rotation_count = 0;
            break;
    
        default:
            break;
    }
    

}

function rotate__guide_img()
{
    switch (guide_rotation_count) {
        case 1:
            g_image.style.transform = 'rotate(60deg)';

            break;
        case 2:
            g_image.style.transform = 'rotate(120deg)';

            break;
        case 3:
            g_image.style.transform = 'rotate(180deg)';

            break;
        case 4:
            g_image.style.transform = 'rotate(240deg)';

            break;
        case 5:
            g_image.style.transform = 'rotate(300deg)';

            break;
        case 6:
            g_image.style.transform = 'rotate(360deg)';
            break;
    
        default:
            break;
    }
    

}





