
// create food link
export const makeImgLink = (food) =>{
    switch (food) {
        case 'kumra':
            return 'https://islanddailyshop.com/wp-content/uploads/2016/05/Capture-7.png'
        case 'potol':
            return 'https://chaldn.com/_mpimage/potol-pointed-gourd-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35666&q=best&v=1&m=400&webp=1'
        case 'alu':
            return 'https://qph.cf2.quoracdn.net/main-qimg-473df3791abc1016f832e49568e93617.webp' 
        case 'lau':
            return 'https://www.ekushey-tv.com/media/imgAll/2019November/Lau-1911180347.jpg' 
    
        default:
            return 'https://qph.cf2.quoracdn.net/main-qimg-473df3791abc1016f832e49568e93617.webp' 
    }
}