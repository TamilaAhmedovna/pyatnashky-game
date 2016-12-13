'use strict'

var nums = randomaze();

function randomaze () {
    var nums = [
        [num1, num2, num3],
        [num4, num5, num6],
        [num7, num8]
    ]
    var num1, num2, num3, num4, num5, num6, num7, num8, num9;
    var tmp = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            var k = Math.floor(Math.random() * 7.4 + 1);
            while (tmp.indexOf(k) !== -1) {
                k = Math.floor(Math.random() * 7.4 + 1);
            }
            nums[i][j] = k;
            tmp.push(nums[i][j]);
        }
    }

    var _num1 = document.getElementById('num1');
    var _num2 = document.getElementById('num2').innerHTML = nums[0][1];
    var _num3 = document.getElementById('num3').innerHTML = nums[0][2];
    var _num4 = document.getElementById('num4').innerHTML = nums[1][0];
    var _num5 = document.getElementById('num6').innerHTML = nums[1][1];
    var _num6 = document.getElementById('num5').innerHTML = nums[1][2];
    var _num7 = document.getElementById('num7').innerHTML = nums[2][0];
    var _num8 = document.getElementById('num8').innerHTML = nums[2][1];

    _num1.innerHTML = nums[0][0];

    nums.forEach(function (item) {

        item.removeEventListener('mouseover', drag_drop(item));
        item.removeEventListener('mouseout', drag_drop(item));

        item.addEventListener('mouseover', drag_drop(item));
        item.addEventListener('mouseout', drag_drop(item));
    })

    return nums;
}



function drag_drop(id) {
    if (document.getElementById(id).style.padding === '7px') {
        document.getElementById(id).style.padding = '';
        document.getElementById(id).style.fontSize = '';
    } else {
        document.getElementById(id).style.padding = '7px'
        document.getElementById(id).style.fontSize = '56px';
    }
}

function MovePoint() {

    this.findFree = function () {
        for (var i = 0; i < nums.length; i++) {
            var free = nums[i].indexOf('free');
            if (free !== -1) {
                return nums[i][free];
            }
        }
    }
    if (document.getElementById('num8')) {}


}

var move = new MovePoint();
// move.findFree();



