var imageURLs = [
    "img/adds/add_xd_0.jpg"
    , "img/adds/add_xd_1.jpg"
    , "img/adds/add_xd_2.jpg"
];
function getImageTag() {
    var img = '<img width="100%" src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Some alt text\"/>';
    return img;
}