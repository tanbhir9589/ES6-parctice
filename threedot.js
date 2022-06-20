//[...] three dot two array added system 


const varcirtyFrinedAges = [25,24,22,23,21,26,27,];
const collegeFriendAges = [16,17,19,18,15,20];
const childFriendAges =[5,6,4,8,9,7,3];
const allFriendsAges = [...varcirtyFrinedAges,...collegeFriendAges,...childFriendAges];
// backdated system ---> const allFriendsAges = varcirtyFrinedAges.concat(collegeFriendAges).concat(childFriendAges);
console.log(allFriendsAges);

// max valve find 

const mango = [550,850,950,1050,250];
const maxValue =Math.max(...mango);
console.log(maxValue);
