import React from 'react';
import "../../css/ui/Icon.css";

const Icon = (props) => {

	const {type, classes, alt, onClick} = props;
	let symbol = <></>;
	switch (type){

		case "right": 
			symbol = <><path d="M362.747,713.536c-5.896-5.898-5.896-15.459,0-21.357l275.217-275.216c5.898-5.896,15.459-5.896,21.357,0l58.694,58.694
			c5.897,5.897,5.897,15.46,0,21.356L442.799,772.23c-5.896,5.897-15.459,5.897-21.354,0L362.747,713.536z"/>
				<path d="M421.444,200.441c5.896-5.897,15.459-5.897,21.354,0l275.217,275.216c5.897,5.897,5.897,15.46,0,21.356l-58.694,58.696
			c-5.898,5.896-15.459,5.896-21.357,0L362.747,280.494c-5.896-5.896-5.896-15.461,0-21.357L421.444,200.441z"/></>
			break;

		case "price":
			symbol = <path d="M623.737,492.277c-28.031-25.614-51.619-38.52-133.125-54.752c-78.773-15.689-82.44-57.772-54.273-71.189
			c30.188-14.379,80.51-17.58,132.825,4.202c22.945,9.554,49.287-1.303,58.84-24.246c9.553-22.944-0.417-49.072-25.998-59.29
			c-22.952-9.167-45.285-15.438-69.889-18.567v-39.769c0-24.853-20.147-45-45-45c-24.853,0-45,20.147-45,45v43.385
			c-21.571,4.73-41.501,12.209-58.271,22.063c-33.276,19.553-53.597,47.767-57.217,79.445c-4.861,42.534,9.412,79.082,41.276,105.693
			c21.057,17.585,55.785,36.351,99.766,45.083c45.333,9,80.316,20.273,95.352,34.38c16.648,15.619,14.981,41.286-11.38,52.862
			c-33.366,14.652-92.306,20.092-162.808-17.954c-21.872-11.803-49.188-3.386-60.877,18.546c-11.69,21.932-3.387,49.188,18.545,60.877
			c31.38,16.726,63.131,28.243,94.833,34.433v38.178c0,24.853,20.147,45,45,45s45-20.147,45-45v-35.338
			c23.792-3.443,45.888-10.384,65.301-20.652c38.043-20.123,62.016-51.522,65.77-86.146
			C667.377,557.694,654.366,520.267,623.737,492.277z"/>
			break;

		case "ticket":
			symbol = <path d="M770.917,386.113l-51.062-51.062c-11.36,11.492-27.128,18.619-44.564,18.619
			c-34.61,0-62.667-28.057-62.667-62.666c0-17.437,7.127-33.205,18.619-44.565l-52.671-52.671c-8.558-8.558-22.433-8.558-30.99,0
			L460.29,281.06l17.111,17.111l-37.477,37.477l-17.111-17.111L193.202,548.147c-8.557,8.558-8.558,22.433,0,30.99l52.685,52.684
			c11.398-11.819,27.386-19.184,45.103-19.184c34.61,0,62.667,28.057,62.667,62.667c0,17.717-7.364,33.705-19.185,45.103
			l51.075,51.075c8.558,8.559,22.434,8.559,30.991,0.001l229.611-229.611l-18.55-18.549l37.477-37.477l18.55,18.549l87.292-87.292
			C779.476,408.546,779.476,394.671,770.917,386.113z M461.478,357.201l37.477-37.477l34.823,34.823l-37.477,37.477L461.478,357.201z
			M516.852,412.575l37.477-37.477l34.823,34.823l-37.477,37.477L516.852,412.575z M607.049,502.772l-34.823-34.823l37.477-37.477
			l34.823,34.823L607.049,502.772z"/>
			break;

		case "location":
			symbol = <path d="M487.337,227.337c-113.816,0.271-206,92.614-206,206.494c0,30.808,6.758,60.034,18.854,86.294
			c18.143,43.878,166.982,246.736,166.982,246.736c4.199,7.273,11.821,11.852,20.164,12.205c8.343-0.354,15.965-4.932,20.164-12.205
			c0,0,148.84-202.858,166.982-246.736c12.096-26.26,18.854-55.486,18.854-86.294C693.337,319.951,601.153,227.608,487.337,227.337z
			M487.337,502.319c-37.601-0.271-68-30.823-68-68.487s30.399-68.218,68-68.488c37.601,0.27,68,30.824,68,68.487
			C555.337,471.496,524.938,502.049,487.337,502.319z"/>
			break;

		case "time":
			symbol = <path d="M681.342,597.336L541.645,497.064V209.546c0-10.059-8.155-18.214-18.216-18.214h-74.881
			c-10.059,0-18.214,8.155-18.214,18.214c0,0,0,325.496,0,331.559s3.174,15.406,8.17,18.94l178.564,128.17
			c8.213,5.809,19.58,3.859,25.39-4.354l43.238-61.137C691.504,614.512,689.555,603.145,681.342,597.336z"/>
			break;
		
		case "left":
			symbol = <><path d="M637.953,259.135c5.896,5.898,5.896,15.459,0,21.357L362.736,555.709c-5.898,5.896-15.459,5.896-21.357,0
			l-58.694-58.694c-5.898-5.897-5.898-15.46,0-21.357l275.217-275.216c5.896-5.897,15.459-5.897,21.354,0L637.953,259.135z"/>
			<path d="M579.256,772.23c-5.896,5.897-15.459,5.897-21.354,0L282.685,497.015c-5.898-5.897-5.898-15.46,0-21.357
			l58.694-58.696c5.898-5.896,15.459-5.896,21.357,0l275.217,275.216c5.896,5.896,5.896,15.461,0,21.357L579.256,772.23z"/></>
			break;

		case "play":
			symbol = <path d="M747.702,445.346L404.921,247.441c-15.47-8.932-34.529-8.932-50,0c-15.47,8.932-25,25.438-25,43.301V686.55
			c0,17.863,9.53,34.369,25,43.301c7.736,4.467,16.366,6.699,25,6.699c8.631,0,17.266-2.233,25-6.698l342.781-197.902
			c15.47-8.932,25-25.438,25-43.302S763.172,454.278,747.702,445.346z"/>
			break;

		case "next":
			symbol = <><path d="M548.524,457.824L359.271,316.949c-8.541-6.358-19.064-6.358-27.606,0
			c-8.541,6.358-13.802,18.107-13.802,30.823V629.52c0,12.716,5.261,24.466,13.802,30.823c4.271,3.18,9.036,4.769,13.803,4.769
			c4.766,0,9.533-1.59,13.803-4.769l189.254-140.872c8.54-6.357,13.803-18.108,13.803-30.823
			C562.327,475.932,557.064,464.182,548.524,457.824z"/>
			<path d="M683.393,650.507c0,8.862-7.184,16.047-16.046,16.047h-45.908c-8.862,0-16.046-7.185-16.046-16.047V328.38
			c0-8.861,7.184-16.045,16.046-16.045h45.908c8.862,0,16.046,7.184,16.046,16.045V650.507z"/></>
			break;

		case "stop":
			symbol = <path d="M686.345,652.776c0,19.087-15.473,34.559-34.56,34.559h-329.27c-19.085,0-34.558-15.472-34.558-34.559
			V323.508c0-19.085,15.473-34.559,34.558-34.559h329.27c19.087,0,34.56,15.474,34.56,34.559V652.776z"/>
			break;

		case "pause":
			symbol = <><path d="M436.149,652.776c0,19.087-15.473,34.559-34.56,34.559h-79.074c-19.085,0-34.558-15.472-34.558-34.559
			V323.508c0-19.085,15.473-34.559,34.558-34.559h79.074c19.087,0,34.56,15.474,34.56,34.559V652.776z"/>
			<path d="M686.345,652.776c0,19.087-15.473,34.559-34.56,34.559h-79.074c-19.085,0-34.558-15.472-34.558-34.559
			V323.508c0-19.085,15.473-34.559,34.558-34.559h79.074c19.087,0,34.56,15.474,34.56,34.559V652.776z"/></>
			break;

		case "info":
			symbol = <><path d="M604.366,728.336c-17.688,0-32.025-14.339-32.025-32.025V453.336v-43.003H429.339h-78v43.003h45.976
			c17.687,0,32.024,14.339,32.024,32.025v210.949c0,17.688-14.338,32.025-32.025,32.025h-41.975v39h74h143.002h65.998v-39H604.366z"/>
			<circle cx="485.931" cy="273.939" r="82.496"/></>
			break;

		case "calendar":
			symbol = <><path d="M658.755,268.379h-33.132v32.551c0,19.557-15.854,35.413-35.411,35.413h-1.313c-19.556,0-35.413-15.856-35.413-35.413
			v-32.551H421.721v32.551c0,19.557-15.855,35.413-35.414,35.413h-1.312c-19.558,0-35.413-15.856-35.413-35.413v-32.551h-37.661
			c-32.474,0-58.8,26.326-58.8,58.8v372.452c0,32.471,26.326,58.799,58.8,58.799h346.833c32.475,0,58.8-26.328,58.8-58.799V327.179
			C717.555,294.706,691.229,268.379,658.755,268.379z M668.842,697.609H304.831V409.075h364.011V697.609z"/>
			<rect x="336.062" y="460.35" width="75.515" height="73.65"/>
			<rect x="448.021" y="460.35" width="75.515" height="73.65"/>
			<rect x="558.583" y="460.35" width="75.514" height="73.65"/>
			<rect x="336.062" y="563.914" width="75.515" height="73.649"/>
			<rect x="448.021" y="563.914" width="75.515" height="73.649"/>
			<rect x="558.583" y="563.914" width="75.514" height="73.649"/>
			</>
			break;

		default: 
			symbol = <></>;
	}

  return (
    <div className={"icon "+classes}>
 		<svg x="0px" y="0px" width="977px" height="977px" viewBox="-0.661 -0.664 977 977">
			<circle fill="none" stroke="#000000" strokeWidth="100" strokeLinejoin="round" strokeMiterlimit="10" cx="487.977" cy="487.978" r="437.977"/>
			{symbol}
		</svg>

    </div>
  );

}

export default Icon;