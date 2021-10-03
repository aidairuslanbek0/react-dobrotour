

function App() {
  return (
    <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40" >
      <div className="d-flex align-center">
        <img width={40} height={40} src="img/logo.png" alt="Logo"/>
        <div className="headerInfo"> 
          <h3>Добро Тур</h3>
          <p>Лучшие туры по Кыргызстану</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30"> 
          <img src="/img/cart.svg" alr="Cart"/>
          <span>3500 сом</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User"/>
        </li>
      </ul>
    </header>

    <div className="content p-40">
       <h1>Все туры</h1>
      
       <div className="card"> 
         <img width={133} height={112} src="/img/photos/1.jpg" alt="photo" />
         <h5>Осенние туры</h5>
         <div>
           <div>
             <span>Cena</span>
             <b>3500 cjv</b>
           </div>
           <button>
             <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
           </button>
         </div>
       </div>
    </div>

    <div className="card">
         <img width={133} height={112} src="/img/photos/1.jpg" alt="photo" />
         <h5>Зимние туры</h5>
         <div>
           <div>
             <span>Cena</span>
             <b>3500 cjv</b>
           </div>
           <button>
             <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
           </button>
         </div>
       </div>

       <div className="card d-flex">
         <img width={133} height={112} src="/img/photos/1.jpg" alt="photo" />
         <h5>Весенние туры</h5>
         <div>
           <div>
             <span>Cena</span>
             <b>3500 cjv</b>
           </div>
           <button>
             <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
           </button>
         </div>
       </div>

       <div className="card">
         <img width={133} height={112} src="/img/photos/1.jpg" alt="photo" />
         <h5>Летние Туры</h5>
         <div>
           <div>
             <span>Cena</span>
             <b>3500 cjv</b>
           </div>
           <button>
             <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
           </button>
         </div>
       </div>
    
    </div>
  );
}

export default App;
