var calc_id = document.getElementById("calc_id").innerHTML
document.getElementById("Calculus icon").setAttribute("href", "/calculus/"+calc_id)
document.getElementById("Proof Tree icon").setAttribute("href", "/calculus/"+calc_id+"/apply")
document.getElementById("Properties icon").setAttribute("href", "/calculus/"+calc_id+"/properties")
var property = document.getElementById("property").innerHTML
if (property == "Main Page") {
    document.getElementById("prop1").setAttribute("href", "/calculus/"+calc_id+"/properties/permutability")
}
if (property == "Permutability") {
    $.get("/api/calculus/"+calc_id, function (calc, status) {
        get_rules_toPage()
    })
}