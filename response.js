var http=require("http");

var server= http.createServer(function(request,response)
{
        if(request.url=="/home")
        {
response.write("<html><head><style>table,th{border:5px solid white ;border-collapse: collapse;}");
response.write("h1{font-size: 50; text-align: center;background-color: lightgreen;font-style: normal;}</style></head>");
response.write("<body><h1>SOUTH INDIAN WILDLIFE SANCTUARY</h1>");
response.write("<tr><p>An animal sanctuary is a facility where animals are brought to live and to be protected");
response.write("for the rest of their lives. Pattrice Jones, co-founder of VINE Sanctuary defines an animal sanctuary as a safe-enough place.");
response.write("<b> SAVE ANIMALS</b></body></html>");
console.log("Request received for homepage");
}

else if(request.url=="/tamilnadu")
{
response.write("<html><head><style> table,th{ border:5px solid white ; border-collapse: collapse; }");
response.write("h1{ font-size: 50; text-align: center;background-color: lightgreen; font-style: normal;}</style></head>");
response.write("<style>h1,h2{color:orange}</style>");
response.write("<style>body{background-color:#444444}</style>");
response.write("<style>p{color:tomato}</style>");
response.write("<body><center><h1><b>TAMILNADU WILDLIFE SANCTUARY</b></h1>");
response.write("<p><b>Santuaries List</b></p>");
            response.write("<ul><i><li><p>Mudumalai Wildlife Sanctuary</p></li>");
            response.write("<li><p>Mundanthurai Wildlife Sanctuary</p></li>");
            response.write("<li><p>Point Calimere Wildlife Sanctuary</p></li>");
            response.write("<li><p>Indira Gandhi Wildlife Sanctuary</p></li>");
            response.write("<li><p>Kalakad Wildlife Sanctuary</p></li>");
            response.write("<li><p>Vallanadu Black Buck Sanctuary</p></li>");
            response.write("<li><p>Grizzled Giant Squirrel Wildlife Sanctuary</p></li>");
            response.write("<li><p>Kanyakumari Wildlife Sanctuary</p></li>");
            response.write("<li><p>Gangaikondan Spotted Deer Sanctuary</p></li>");
            response.write("<li><p>Cauvery North Wildlife Sanctuary</p></li> </i> </ul></center>");
            console.log("Request received for tamilnadu");
}
else if(request.url=="/Kerala")
{
response.write("<html><head><style> table,th{ border:5px solid white ; border-collapse: collapse; }");
response.write("h1{ font-size: 50; text-align: center;background-color: lightgreen; font-style: normal;}</style></head>");
response.write("<style>h1,h2{color:orange}</style>");
response.write("<style>body{background-color:lightpink}</style>");
response.write("<style>p{color:black}</style>");
response.write("<body><center><h1><b>KERALA WILDLIFE SANCTUARY</b></h1>");
response.write("<p><b>Santuaries List</b></p>");
            response.write("<ul><i><li><p>Peechi-Vazhani Wildlife Sanctuary</p></li>");
            response.write("<li><p>Wayanad  Wildlife Sanctuary</p></li>");
            response.write("<li><p>Idukki Wildlife Sanctuary</p></li>");
            response.write("<li><p>Peppara Wildlife Sanctuary</p></li>");
            response.write("<li><p>Thattekad  Wildlife Sanctuary</p></li>");
            response.write("<li><p>Shendurney  Black Buck Sanctuary</p></li>");
            response.write("<li><p>Chinnar Wildlife Sanctuary</p></li>");
            response.write("<li><p>Chimmony Wildlife Sanctuary</p></li>");
            response.write("<li><p>Aralam Wildlife Sanctuary</p></li>");
            response.write("<li><p>Mangalavanam Wildlife Sanctuary</p></li> </i> </ul></center>");
            console.log("Request received for kerala");
}


else
        {
            response.end("Invalid Request");
        }
});

server.listen(3000);

console.log("Server running Successfully");
