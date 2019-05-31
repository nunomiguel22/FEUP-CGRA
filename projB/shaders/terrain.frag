#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform vec4 uAmbientMat;
uniform float uAmbient;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;


void main() {
	//Color, Height and altimetry data
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(uSampler2, vTextureCoord);
	vec2 altimetryCoords = vec2(0.1, 1.0 - filter.r);
	vec4 altimetry = texture2D(uSampler3, altimetryCoords);
	//Color mixing with altimetry
	vec4 finalColor = color;
	finalColor.r = (color.r * 0.6 + altimetry.r * 0.4);
	finalColor.g = (color.g * 0.6 + altimetry.g * 0.4);
	finalColor.b = (color.b * 0.6 + altimetry.b * 0.4);
	//Apply ambient light to final color
	finalColor *= uAmbientMat * vec4(vec3(uAmbient, uAmbient, uAmbient), 1.0);

	gl_FragColor = finalColor;
	
}
