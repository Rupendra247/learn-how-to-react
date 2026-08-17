// making User tag
let User = () => {
  //   return <div>I am user</div>;
  //   let data = [
  //     { id: 1, name: "rup", age: 22 },
  //     { id: 2, name: "rupe", age: 22 },
  //     { id: 3, name: "rupen", age: 22 },
  //     { id: 4, name: "rupend", age: 22 },
  //   ];
  let data = [
    {
      _id: 1,
      name: "nitan",
      age: 30,
      address: "kathmandu",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5v0tocLtdcVrsfwZkfPHoDkLThWWgVyduWNkMV_dwg&s",
    },
    {
      _id: 2,
      name: "roshan",
      age: 20,
      address: "kathmandu",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdWMtcrIVhEkY-BRMXCrZaVRWEj1_Z6SmuShlMnjtQg&s=10",
    },
    {
      _id: 3,
      name: "ram",
      age: 32,
      address: "lalitpur",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5v0tocLtdcVrsfwZkfPHoDkLThWWgVyduWNkMV_dwg&s",
    },
    {
      _id: 4,
      name: "shyam",
      age: 40,
      address: "bhaktapur",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGrrFKfUdXOUdBr_pZeMie7vDlpRwX1WJPfe57eYppg&s=10",
    },
  ];
  //   return (
  //     <div>
  //       {[1, 2, 3].map((item, i) => {
  //         // return <p>hello</p>;
  //         return <p>{item * 10}</p>;
  //       })}
  //     </div>

  //   )
  //   return (
  //     <div>
  //       {["RUP", "DHU"].map((item, i) => {
  //         // return <p>hello</p>;
  //         return <p>{item} BEST</p>;
  //       })}
  //     </div>
  //   );
  // };

  return (
    <div>
      {data.map((item, i) => {
        return (
          <div>
            <img src="{item.photo}" width="200px" height="200px" />
            <p>name is {item.name}</p>
            <p>name is {item.age}</p>
            <p>address is {item.address}</p>
          </div>
        );
      })}
    </div>
  );

  // return <div>
  //     {
  //         data.map((item,i) => {

  //             return <div>
  //                 <img src="{item.photo}" width="200px" height="200px"/>
  //                 <p>name is {item.name}</p>,
  //                 <p>name is {item.age}</p>,
  //                 <p>name is {item.address}</p>

  //         </div>

  //         })
  // }
  // </div>
};

export default User;
//components are tage made my us likrUser Product
