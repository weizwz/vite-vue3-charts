export const get_date = (num: number) => {
  const dateArray = []
  //获取今天日期
  const myDate = new Date()
  const today = myDate.getMonth() + 1 + '/' + myDate.getDate()
  myDate.setDate(myDate.getDate() - num)
  let dateTemp // 临时日期数据
  const flag = 1
  for (let i = 0; i < num; i++) {
    dateTemp = myDate.getMonth() + 1 + '/' + myDate.getDate()
    dateArray.push({
      date: dateTemp
    })
    myDate.setDate(myDate.getDate() + flag)
  }
  dateArray.push({
    date: today
  })
  const arr: any[][] = []
  const newArr = []
  dateArray.forEach((item) => {
    arr.push(item.date.split('-'))
  })
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < 10) {
      arr[i][1] = '0' + arr[i][1]
    }
    if (arr[i][2] < 10) {
      arr[i][2] = '0' + arr[i][2]
    }
  }
  for (let j = 0; j < arr.length; j++) {
    newArr.push(arr[j].join('-'))
  }
  return newArr
}
