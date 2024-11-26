import React,{ useState } from 'react';
import './maincontent.css';

function MainContent() {
const article = {
title: 'Son Goku',
image: '/img/xenoverse_2_wallpaper_by_maxiuchiha22_dexf2r9-pre.jpg', // URL hình ảnh mẫu
content: `Son Goku, tên khai sinh là Kakarot là nhân vật chính trong series manga Dragon Ball của Toriyama Akira. Cậu là cháu trai nuôi của ông nội Gohan, chồng của Chi-Chi, bố của Gohan và Goten, ông nội của Pan và trong Dragon Ball GT là cụ cố của Goku Jr`,
author: 'Akira Toriyama',
date: 'October 8, 2024',
};
const [content, setContent] = useState('Thông tin về Saiyan');
const ssj = {
    ssj1:'Super Saiyan là hình thức chuyển đổi đầu tiên và đặc trưng của người Saiyan, nó giúp họ tăng sức mạnh lên đáng kể. Form này xuất hiện đầu tiên trong Chap 317 Manga và tập 95 Anime, cùng vào năm 1991.',
    ssj2:'Super Saiyan 2  là sự biến đổi kế tiếp của dạng Super Saiyan đầu tiên. Nó nhìn rất giống với Super Saiyan, nhưng có nhiều tia điện bao quanh. Tốc độ và sức mạnh đều tăng vượt trội. Son Gohan là người đầu tiên đạt được cấp độ này trong manga và anime, cậu sử dụng nó trong khi chiến đấu chống lại Cell. Sau này, Son Goku, Vegeta và Future Trunks đều đạt được cấp độ này',
    ssj3:'Super Saiyan 3 là hình thức chuyển đổi sức mạnh thứ 3 của Siêu Saiyan và Goku là người đầu tiên đạt được trạng thái này. Còn nhớ, lần đầu tiên Goku biến hình thành Super Saiyan 3 là khi anh tìm cách cản đường Majin Buu để Trunks có cơ hội lấy Rada Ngọc Rồng'
}


return (
<main className="main-content">
<div className="article">
<h1>{article.title}</h1>
<img src={article.image} alt="Web Design" />
<p className="content">{article.content}</p>
<div className="article-meta">
<p>Written by: {article.author}</p>
<p>Date: {article.date}</p>
</div>
</div>
<h1>{content}</h1>
<button onClick={() => setContent(ssj.ssj1)} >Super Saiyan 1</button>
<button onClick={() => setContent(ssj.ssj2)} >Super Saiyan 2</button>
<button onClick={() => setContent(ssj.ssj3)}>Super Saiyan 3</button>

</main>
);
}

export default MainContent;
