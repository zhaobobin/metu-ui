export var flattenArr = function (arr) {
    return arr.reduce(function (prev, next) {
        return prev.concat(Array.isArray(next) ? flattenArr(next) : next);
    }, []);
};
export var treeArr = function (data) {
    var result = [];
    if (!Array.isArray(data)) {
        return result;
    }
    data.forEach(function (item) {
        delete item.children;
    });
    var map = {};
    data.forEach(function (item) {
        map[item.id] = item;
    });
    data.forEach(function (item) {
        var parent = map[item.pid];
        if (parent) {
            (parent.children || (parent.children = [])).push(item);
        }
        else {
            result.push(item);
        }
    });
    return result;
};
export var quickSort = function (array) {
    var sort = function (arr, left, right) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = arr.length - 1; }
        if (left >= right) { //如果左边的索引大于等于右边的索引说明整理完毕
            return;
        }
        var i = left;
        var j = right;
        var baseVal = arr[j]; // 取无序数组最后一个数为基准值
        while (i < j) { //把所有比基准值小的数放在左边大的数放在右边
            while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
                i++;
            }
            arr[j] = arr[i]; // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
            while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
                j--;
            }
            arr[i] = arr[j]; // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
        }
        arr[j] = baseVal; // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
        sort(arr, left, j - 1); // 将左边的无序数组重复上面的操作
        sort(arr, j + 1, right); // 将右边的无序数组重复上面的操作
    };
    var newArr = array.concat(); // 为了保证这个函数是纯函数拷贝一次数组
    sort(newArr);
    return newArr;
};
export var quickEasySort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [], right = [], k = arr.splice(0, 1)[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > k) {
            right.push(arr[i]);
        }
        else {
            left.push(arr[i]);
        }
    }
    return quickEasySort(left).concat([k], quickEasySort(right));
};
