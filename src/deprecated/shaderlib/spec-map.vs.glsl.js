export default `\
#define SHADER_NAME spec-map-vs

attribute vec3 positions;
attribute vec3 normals;
attribute vec2 texCoords;
attribute vec2 texCoord2;
attribute vec2 texCoord3;
attribute vec4 colors;

uniform mat4 worldMatrix;
uniform mat4 projectionMatrix;
uniform mat4 worldInverseTransposeMatrix;

varying vec2 vTexCoord1;
varying vec2 vTexCoord2;
varying vec2 vTexCoord3;
varying vec4 vTransformedNormal;
varying vec4 vPosition;
varying vec4 vColor;

void main(void) {
  vPosition = worldMatrix * vec4(positions, 1.0);
  vTransformedNormal = worldInverseTransposeMatrix * vec4(normals, 1.0);
  vTexCoord1 = texCoords;
  vTexCoord2 = texCoord2;
  vTexCoord3 = texCoord3;
  vColor = colors;
  gl_Position = projectionMatrix * vPosition;
}
`;
