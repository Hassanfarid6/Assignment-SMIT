// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, collection, getDocs } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkln1uMz1ujaEJtySGqJ3_TYG_JYbVVyI",
  authDomain: "hassan-testing-smit.firebaseapp.com",
  projectId: "hassan-testing-smit",
  storageBucket: "hassan-testing-smit.firebasestorage.app",
  messagingSenderId: "331139508534",
  appId: "1:331139508534:web:147e9c6ac3c0eeaf672b97",
  measurementId: "G-YJJS6XPDFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbRef = getAnalytics(app);
const blogRef = collection(dbRef, "blogs")

const fetchData = async () => {
    try {
        const data = await getDocs(blogRef)
        return data
    }
    catch (e) {
        console.log(e)
    }
}
function createCard(cardDetail, id) {
    const { imgLink, title, description, author, publishedAt } = cardDetail
    const descriptionLimit = 50
    const card = `<div class="card">
    <img src=${imgLink}/>
    <h2>${title}</h2>
    <p>${description.slice(0, descriptionLimit)}...</p>
    <h5>${author}</h5>
    <span>${new Date(publishedAt).toLocaleString()}</span>
    <a href="detail#${id}">Read More</a>
    </div>`
    return card
}
async function showData() {
    const data = await fetchData()
    data.forEach(doc => {
        const parsedData = doc.data()
        const card = createCard(parsedData, doc.id)
        blog.innerHTML += card
    })
}

showData()


