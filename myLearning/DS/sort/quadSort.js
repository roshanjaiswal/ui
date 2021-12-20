// https://tech-en.netlify.app/articles/en512682/index.html

if (val[0] > val[1]) {
    tmp[0] = val[1];
    tmp[1] = val[0];
} else {
    tmp[0] = val[0];
    tmp[1] = val[1];
}



if (val[2] > val[3]) {
    tmp[2] = val[3];
    tmp[3] = val[2];
} else {
    tmp[2] = val[2];
    tmp[3] = val[3];
}



if (tmp[1] <= tmp[2]) {
    val[0] = tmp[0];
    val[1] = tmp[1];
    val[2] = tmp[2];
    val[3] = tmp[3];
} else if (tmp[0] > tmp[3]) {
    val[0] = tmp[2];
    val[1] = tmp[3];
    val[2] = tmp[0];
    val[3] = tmp[1];
} else {  0<=3 &&  2<1
    if (tmp[0] <= tmp[2]) {
        val[0] = tmp[0];
        val[1] = tmp[2];
    } else {
        val[0] = tmp[2];
        val[1] = tmp[0];
    }

    if (tmp[1] <= tmp[3]) {
        val[2] = tmp[1];
        val[3] = tmp[3];
    } else {
        val[2] = tmp[3];
        val[3] = tmp[1];
    }
}
