import svgenie from './svgenie';


export default function downloadPNG(DOMNode, id, fileNm){
  let svg = DOMNode.getElementsByTagName('svg')[0];
  if(!svg.id){
    svg.id = id;
  }
  svgenie.save( id, {
    name : fileNm
  });
}