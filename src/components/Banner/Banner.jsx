import "./Banner.css"
const Banner =()=>{
    return(
        <>
        <div>
          <h1 className="head">Trendig Recipes</h1>
          <marquee>
          <div className="scroll">
             <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2o86IDNmk8t6E2yl-5LPK401pby8B2BX0Vg&s " height="400px" width="350px"/></div>
             <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIHfKgt151OEijbn2I1pCb-8tE7kttGbGu3vdSRwzeNhR_KMY2upNECcNvYxN6A0ynNQ&usqp=CAU" height="400px" width="350px"/></div>
             <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShlZSQQLHhRIoluEtg0u8GZ7--xdEx0GX9NA&s "height="400px" width="350px"/></div>
             <div><img src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg "height="400px" width="350px"/></div>
             <div><img src="https://www.shutterstock.com/image-photo/beautiful-food-image-on-table-260nw-2545025947.jpg "height="400px" width="350px"/></div>
             <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDV7Jz7erCqE-G-lz5EQaZYbEzQqytVmF34oSNXN0VXnZDBjad0zSSBmuqX12_pJTrldc&usqp=CAU "height="400px" width="350px"/></div>
             <div><img src="https://www.shutterstock.com/image-photo/grilled-salmon-vegetables-eggs-sour-260nw-130371821.jpg "height="400px" width="350px"/></div> 
            </div>
            </marquee>
            <br></br>
            <br></br>
        </div>
        </>
    )
}
export default Banner