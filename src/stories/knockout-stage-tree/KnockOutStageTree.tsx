import styled from "styled-components";

interface KnockOutStageTreeProps {

}

const KnockOutStageTree: React.FunctionComponent<KnockOutStageTreeProps> = () => {
  return (
    <StyleWrapper className="knock-out-stage-tree">
      <div className="knock-out-stage-tree-section-1">
      </div>
      <div className="knock-out-stage-tree-section-2">
      </div>
      <div className="knock-out-stage-tree-section-1">
      </div>
      <div className="knock-out-stage-tree-section-2">
      </div>
    </StyleWrapper>
  );
}

const StyleWrapper = styled.div`
  &.knock-out-stage-tree {
    height: 100vh;
    width: 100vw;
    display: flex;
    padding: 0;
    margin: 0;
    overflow: scroll;

    .knock-out-stage-tree-section-1 {
      background-color: red;
      height: 100%;
      min-width: 50%;
    }

    .knock-out-stage-tree-section-2 {
      background-color: blue;
      height: 100%; 
      min-width: 50%;
    }
  }
`

export default KnockOutStageTree;