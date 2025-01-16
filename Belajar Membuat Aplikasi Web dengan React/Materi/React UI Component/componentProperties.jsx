function sayHello(props){
    const name = props.name;
    const company = props.company;

    return(
        <p>
            Hello, {name} from {company}.
        </p>
    )
}

// Contoh Penggunaan
<sayHello name="Bill" company="Microsoft" />; // <p>Hello, Bill from Microsoft!</p>
<sayHello name="Steve" company="Apple" />; // <p>Hello, Steve from Apple!</p>
<sayHello name="Mark" company="Facebook" />; // <p>Hello, Mark from Facebook!</p>

// Properti children
function SayHello({ children }) {
    return <p>Hello, {children}!</p>;
  }
   
<SayHello>Dicoding</SayHello>; // Hello, Dicoding!