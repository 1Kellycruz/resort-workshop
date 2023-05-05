// pass a function getRoomRate()
// that is passed in the check in date 
// and room type it wil return a nightly 
// rate.

// start by always returning 150 from the function

// remember the discount 


//when the "estimate stay cost" button is clicked

// the page should display :
// - the original room cost 
// - the discount, if any
// - the discount room cost
// - the tax
// the total cost of the stay

const checkInDateEl = document.getAnimations('checkInDate');
const numberOfNightsEl = document.getElementById('numberOfNights');

const queenBtnEl = document.getElementById('queenBtn');
const KingBtnEl = document.getElementById('kingBtn');
const twoBedBtnEl = document.getElementById('queenBtn');

const numOfAdultsEl = document.getElementById('numOfAdults');
const numOfChildrenEl = document.getElementById('numOfChildren');

const roomEstimateBtnEl = document.getElementById('roomEstimateBtn');
const roomPriceEl = document.getElementById('roomPrice');
const discountAmountEl = document.getElementById('discountAmount');
const discountRoomPriceEl = document.getElementById('discountRoomPrice');
const taxAmountEl = document.getElementById('taxAmountEl');
const totalDueEl = document.getElementById('totalDue');