import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


export default function Slider() {
    const imgInfo = [
        {
            id:1,
            imgSrc:"https://cdn.araratour.com/file_manager/files/The%20towns%20of%20Armenia/1/%D0%94%D0%B8%D0%BB%D0%B8%D0%B6%D0%B0%D0%BD2.jpg",
            name:"Դիլիջան",
        },
        {
            id:2,
            imgSrc:"https://www.advantour.com/img/armenia/vayots-dzor/vayots-dzor.jpg",
            name:"Ջերմուկ",
        },
        {
            id:3,
            imgSrc:"https://dsegh.am/Assets/Images/Activities/Activity_Details/Discovering_Nature/Nature_3.webp",
            name:"Դսեղ",
        },
        {
            id:4,
            imgSrc:"https://i.pinimg.com/736x/c2/43/8f/c2438f3c73b563b009096ba61b81fd6d--armenia.jpg",
            name:"Սյունիք",
        },
        {
            id:5,
            imgSrc:"https://armadventure.com/wp-content/uploads/2018/11/sevan1.jpg",
            name:"Սևան",
        }
    ]
    return(
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >

            {
                imgInfo.map((el,i)=>{
                    return(
                        <SwiperSlide className='nkar' key={el.id}>
                            <p>{el.name}</p>
                            <img src={el.imgSrc} alt="nature" />
                        </SwiperSlide>
                    )
                })
            }
      </Swiper>
    )
}