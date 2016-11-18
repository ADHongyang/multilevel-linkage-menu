const exp=require("express");
const app=exp();
const bodyparser=require('body-parser');
const fs=require('fs');

app.use(exp.static("www"));

app.use(bodyparser.urlencoded({extended:true}))

app.post("/sheng",(req,res)=>{
	console.log(req.body.sheng)
	fs.readFile('www/address.txt',function(err,data){
		if(err){
			console.log('系统错误')
		}else{
			var address=JSON.parse(data);
			res.status(200).json(address)
		}
	})
})

app.listen(3000,function(){
	console.log('亚古兽究极进化')
})

