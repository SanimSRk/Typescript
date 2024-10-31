{

    // spread operatoe use case

    const boss1:string[] = ['sanim', 'oshi', 'rahim', 'karim', 'junaid'];
    const boss2:string[]=['samin', 'maya', 'tariq', 'nabila', 'farhan'];

    boss1.push(...boss2)

  const mentor1:{name:string;age:number;profession:string}=  { name: 'sanim', age: 21, profession: 'developer' }
  const mentor2:{name:string;age:number;profession:string}= { name: 'oshi', age: 22, profession: 'designer' }
  const mentor3:{name:string;age:number;profession:string}= { name: 'rahim', age: 23, profession: 'teacher' }


  const mentorList={
    ...mentor1,
    ...mentor2,
    ...mentor3
  }
  console.log(mentorList)

  const getFriend=(...friend:string[])=>{
    friend.forEach((friends:string)=>console.log(friends))
  }

  getFriend('aboul','babol','kabol','sabol')
}