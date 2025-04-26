function isPalindrome(s: string): boolean {
    const normalizeString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalizeString.length === 0) return false;

    let left = 0;
    let right = normalizeString.length-1;
    console.log(Math.ceil(5/2) )

    for (let i = 0; i < Math.ceil(s.length-1); i++) {
        if (normalizeString[left] !== normalizeString[right]) {
            return false
        }
        left++;
        right--;
    }


    return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))

function removeElement(nums: number[], val: number): number {

    let left =0;
    let right = nums.length - 1;

    while (left <= right) {
        while (nums[left] !== val && left <= right) {
            left++;
        }

        if(left > right){
            break;
        }

        while (nums[right] ===val && left <= right){
            right--;
        }

        if(left > right){
            break;
        }

        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }

    return left;
}

console.log(removeElement([3,2,2,3],3))

function strStr(haystack: string, needle: string): number {
    let start = 0;

    while(start <= haystack.length - needle.length) {
        let index = 0;

        while(index < needle.length) {
            if(haystack[start + index] !== needle[index]) {
                break;
            }

            index++;
        }

        if(index >= needle.length) {
            return start;
        }

        start++;
    }

    return -1;
}

console.log(strStr("sadbutsad","sad"))

function removeDuplicates(nums: number[]): number {
 return -1
}

console.log(removeDuplicates([1,1,2]))

function fib(n:number):number {
    if(n === 0) return 0;
    if(n===1) return 1;

    return fib(n-1) + fib(n-2)
}

console.log(fib(4))


function max(list:number[]):number{
    let theBiggest:number = list[0];

    for(let i=0;i<list.length;i++){
        if(theBiggest<list[i]){
            theBiggest = list[i];
        }
    }

    return theBiggest;
}

console.log(max([23,16,42,15,4,8]))


function reverse(x:number):number{
    let digits = String(Math.abs(x)).split('');

    let left = 0;
    let right = digits.length - 1;

    while(left < right){
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }
    let reversed = Number(digits.join(''));

    if(!isInt(reversed)){
        return 0;
    }

    return x < 0 ? -reversed : reversed;

}

function isInt(x:number):boolean{
    return -2_147_483_648 <= x && x <= 2_147_483_648;
}
console.log(reverse(123))
console.log(reverse(-123))