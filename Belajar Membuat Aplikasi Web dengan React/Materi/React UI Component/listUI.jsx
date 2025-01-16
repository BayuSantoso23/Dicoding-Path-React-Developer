import React from 'react';
import { createRoot } from 'react-dom/client';
 
// Tanpa {}, React akan membaca href="link" sebagai string literal "link".
// Dengan {}, React akan membaca href={link} sebagai variabel link.
function Button({link}) {
  // TODO: selesaikan component-nya
  return <a href={link}>Click me!</a>;
}
 
function CardHeader({image, category}) {
  // TODO: selesaikan component-nya
  return (
    <header>
        <h4>{category}</h4>
        <img src={image} alt="" />
    </header>
  );
}
 
function CardBody({date, title, content, link}) {
  // TODO: selesaikan component-nya
  return (
    <div>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button link={link}/>
    </div>
  )
}
 
function Card({image, category, date, title, content, link}) {
  // TODO: selesaikan component-nya
  return (
    <article>
        <CardHeader image={image} category={category} />
        <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}
 
function Header({title, subtitle}) {
  // TODO: selesaikan component-nya
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
 
function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://picsum.photos/600/400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://picsum.photos/600/400',
      category: 'Travel',
      link: '#'
    }
  ];
 
  // TODO: selesaikan component-nya
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      {someNews.map((news) => (
        <Card {...news} key={news.title} />
      ))}
    </div>
  );
}
 
const root = createRoot(document.getElementById('root'));
root.render(<News />);