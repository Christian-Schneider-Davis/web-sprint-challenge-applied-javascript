const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //

    let implementation = document.getElementById ('.header');
      implementation.appendChild.date = date;
      implementation.appendChild.h1.textContent= title ("title");
      implementation.appendChild.temp= temp;

const ltHeader = document.createElement("div");
ltHeader.classList.add("header");
const ltDate = document.createElement("span");
ltDate.classList.add("date");
const ltTitle = document.createElement("h1");
ltTitle.textContent= title;
const ltTemp = document.createElement("span");
ltTemp.classList.add("temp");




implementation.appendChild(ltHeader);
implementation.appendChild(ltDate);
implementation.appendChild(ltTitle);
implementation.appendChild(ltTemp);  

  return implementation;
}
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
}

export { Header, headerAppender }
