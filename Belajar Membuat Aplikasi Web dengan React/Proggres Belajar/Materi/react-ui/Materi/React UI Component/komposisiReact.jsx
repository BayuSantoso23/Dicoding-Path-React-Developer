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
        <button link={link}/>
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
      <Card 
        title={someNews[0].title}
        date={someNews[0].date}
        content={someNews[0].content}
        image={someNews[0].image}
        category={someNews[0].category}
        link={someNews[0].link}
      />
      <Card 
        title={someNews[1].title}
        date={someNews[1].date}
        content={someNews[1].content}
        image={someNews[1].image}
        category={someNews[1].category}
        link={someNews[1].link}
      />
      <Card 
        title={someNews[2].title}
        date={someNews[2].date}
        content={someNews[2].content}
        image={someNews[2].image}
        category={someNews[2].category}
        link={someNews[2].link}
      />
    </div>
  );
}
 
const root = createRoot(document.getElementById('root'));
root.render(<News />);