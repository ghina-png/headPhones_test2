import './../../assets/styles/About.css'
import img from '../../assets/images/about.jpg'
const About = () => {
  return (
    <div className='a  f-cen f-col'>
    <div className=' about  f-cen f-col'>
      <h1>About Store</h1>
      <p>Discover our story of passion for providing the best audio experiencefor our customers</p>
    </div>
    <div className="d f-evn g1 p1 w100">
      
      <div className="d1">
       <h1>Our Story</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aspernatur rem reiciendis ex, </p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, similique! Reprehenderit earum tenetur impedit sunt, ipsam saepe
           accusantium asperiores.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus maiores, veniam molestiae hic voluptatem accusamus minima 
            laboriosam!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum unde reprehenderit maxime voluptatum,
               nesciunt esse dicta! Molestias, aliquam dolores!</p>
               <p>Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Reprehenderit odio et sequi doloribus hic accusamus pariatur. 
                 Fugit ducimus soluta, saepe laboriosam sequi numquam quibusdam, eaque mollitia a corrupti consequatur, 
                nemo delectus vitae qui obcaecati excepturi.</p>
      </div>
      <div className="d2">
        <img src={img} alt=""  />
      </div>

    </div>
    </div>
  )
}

export default About
