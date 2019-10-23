console.log(__filename); //filename
console.log(__dirname); //directory



const displayTimeout = () => {
    console.log(`this is from timout method it displays after  a set Timoeout`)
}
// setTimeout(<a function>, <an timeout>

setTimeout(displayTimeout,5000)


// setTimeout(<a function>, <an Interval>
const displayInterval = () => {
    console.log(`this is from timout method it displays after an interval`)
}
setInterval(displayInterval, 2000)


