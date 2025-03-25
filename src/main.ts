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


isPalindrome("A man, a plan, a canal: Panama")