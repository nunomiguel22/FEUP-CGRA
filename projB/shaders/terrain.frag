#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform sampler2D uSampler3;


void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(uSampler2, vTextureCoord);
	vec2 altimetryCoords = vec2(0.1, 1.0 - filter.r);
	vec4 altimetry = texture2D(uSampler3, altimetryCoords);

	vec4 finalColor = color;

	finalColor.r = color.r * 0.60 + altimetry.r * 0.40;
	finalColor.g = color.g * 0.60 + altimetry.g * 0.40;
	finalColor.b = color.b * 0.60 + altimetry.b * 0.40;


	gl_FragColor = finalColor;
}
