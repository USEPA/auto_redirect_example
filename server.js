//const fs = require('fs');
const http = require('http');
//const URL = require('url');
//
const myServer = http.createServer	(
									function (request, response) 
										{
										console.log("request.url = " + request.url);
										if (["/", "/favicon.ico"].includes(request.url))
											{
											let pageHTML =	`
															<!DOCTYPE html>
															<html>
															<head>
																<title>Test redirect</title>
															</head>
															<body>
																<p id="demo1">
															`	+
																"request.url = " + request.url +
															`
																</p>
															</body>
															</html>
															`;
											response.writeHead(200, {'Content-Type': 'text/html'});
											response.write(pageHTML);
											response.end();
											} else	{
													response.writeHead(301, {'Location': 'https://quill.epa.gov/ord' + request.url}); 
													response.end();
													}
										}
									).listen(
											process.env.PORT,
											//3000, 
											function()
												{
												console.log("SERVER STARTED :) ");
												//console.log("SERVER STARTED PORT 3000");
												}
											);
