//mbtis.istj ---> 4
//result[mbtis.istj]
import { results, mbtis } from "./data.js";
//http://127.0.0.1:5050/result.html?mbti=istj
//mbti=istj을 뽑아내야 합니다.
//쿼리스트링
const mbti = new URLSearchParams(location.search).get("mbti")
console.log('mbti = '+ mbti)

const result = results[mbtis[mbti]]
// console.log(result)

const titleE1 = document.querySelector(".page-title")
const characterE1 = document.querySelector(".character")
const boxE1 = document.querySelectorAll(".box")
const jobsE1 = document.querySelectorAll(".job")
const lectureE1 = document.querySelector(".lecture")
const lectureImgE1 = document.querySelector(".lecture img")

titleE1.innerHTML = result.title
characterE1.src = result.character
boxE1.forEach(function(boxE1, index){
  boxE1.innerHTML = result.results[index]
})
jobsE1.forEach(function(job, index){
  job.innerHTML = result.jobs[index]
})

//이미지 URL
lectureE1.href = result.lectureUrl
lectureImgE1.src = result.lectureImg


