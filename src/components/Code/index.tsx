import { Box, FlexBox } from '../../ui';
import theme from '../../theme';
import {
  ShadowFirst,
  ShadowSecond,
  TextAmber,
  TextCyan,
  TextGray,
  TextGreen,
  TextOrange,
  TextPink,
  TextWhite,
  WrapperForCode,
  WrapperMac,
} from './styled';

const Code = () => {
  return (
    <WrapperMac>
      <FlexBox flexDirection='row'>
        <ShadowFirst />
        <ShadowSecond />
      </FlexBox>
      <Box padding='16px'>
        <FlexBox flexDirection='row'>
          <Box
            width='12px'
            height='12px'
            borderRadius='50px'
            background={theme.colors.red[0]}
          />
          <Box
            width='12px'
            height='12px'
            borderRadius='50px'
            background={theme.colors.orange[4]}
            margin='0 8px'
          />
          <Box
            width='12px'
            height='12px'
            borderRadius='50px'
            background={theme.colors.green[2]}
          />
        </FlexBox>
      </Box>
      <WrapperForCode>
        <code>
          <div>
            <TextPink>const</TextPink>
            <TextWhite> coder</TextWhite>
            <TextPink> = </TextPink>
            <TextGray>&#10100;</TextGray>
          </div>
          <Box margin='0 0 0 16px'>
            <TextWhite>name:</TextWhite>
            <TextGray> '</TextGray>
            <TextAmber>Roksolana Kushnir</TextAmber>
            <TextGray>',</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextWhite>skills: </TextWhite>
            <TextGray>['</TextGray>
            <TextAmber>HTML</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>CSS</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>Js</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>React</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>Redux</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>React Native</TextAmber>
            <TextGray>', '</TextGray>
            <TextAmber>TypeScript</TextAmber>
            <TextGray>'],</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextWhite>hardWorker:</TextWhite>
            <TextOrange> true</TextOrange>
            <TextGray>,</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextWhite>quickLearner:</TextWhite>
            <TextOrange> true</TextOrange>
            <TextGray>,</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextWhite>problemSolver:</TextWhite>
            <TextOrange> true</TextOrange>
            <TextGray>,</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextGreen>hireable</TextGreen>
            <TextGray>() &#10100;</TextGray>
          </Box>
          <Box margin='0 0 0 32px'>
            <TextPink>const</TextPink>
            <TextGray> &#10100; </TextGray>
            <TextWhite>hardWorker</TextWhite>
            <TextGray>, </TextGray>
            <TextWhite>problemSolver</TextWhite>
            <TextGray>, </TextGray>
            <TextWhite>skills</TextWhite>
            <TextGray> &#10101; </TextGray>
            <TextPink>= </TextPink>
            <TextPink>this</TextPink>
            <TextGray>;</TextGray>
          </Box>
          <Box margin='0 0 0 32px'>
            <TextPink>return </TextPink>
            <TextWhite>hardWorker</TextWhite>
            <TextAmber> && </TextAmber>
            <TextWhite>problemSolver</TextWhite>
            <TextAmber> && </TextAmber>
            <TextWhite>skills.length</TextWhite>
            <TextAmber> &#10095;= </TextAmber>
            <TextOrange>7</TextOrange>
            <TextGray>;</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextGray>&#10101;,</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextGreen>funFact</TextGreen>
            <TextGray>() &#10100;</TextGray>
          </Box>
          <Box margin='0 0 0 32px'>
            <TextCyan>console.</TextCyan>
            <TextWhite>log</TextWhite>
            <TextGray>(</TextGray>
            <TextAmber>
              "I once solved a bug at 3 AM without coffee. Let's just say, I'm
              as reliable as your unit tests."
            </TextAmber>
            <TextGray>);</TextGray>
          </Box>
          <Box margin='0 0 0 16px'>
            <TextGray>&#10101;,</TextGray>
          </Box>
          <div>
            <TextGray>&#10101;;</TextGray>
          </div>
          <br />
          <div>
            <TextPink>if</TextPink>
            <TextGray> (</TextGray>
            <TextWhite>coder.</TextWhite>
            <TextGreen>hireable</TextGreen>
            <TextGray>()</TextGray>
            <TextGray>) &#10100;</TextGray>
          </div>
          <Box margin='0 0 0 8px'>
            <TextWhite>coder.</TextWhite>
            <TextGreen>funFact</TextGreen>
            <TextGray>();</TextGray>
          </Box>
          <Box margin='0 0 0 8px'>
            <TextCyan>console.</TextCyan>
            <TextWhite>log</TextWhite>
            <TextGray>(</TextGray>
            <TextAmber>
              'Hiring me means getting a hard-working problem-solver with a love
              for learning.'
            </TextAmber>
            <TextGray>);</TextGray>
          </Box>
          <div>
            <TextGray>&#10101; </TextGray>
            <TextPink>else</TextPink>
            <TextGray> &#10100;</TextGray>
          </div>
          <Box margin='0 0 0 8px'>
            <TextCyan>console.</TextCyan>
            <TextWhite>log</TextWhite>
            <TextGray>(</TextGray>
            <TextAmber>
              'I may not meet all criteria, but I'm still ready to improve and
              grow!'
            </TextAmber>
            <TextGray>);</TextGray>
          </Box>
          <div>
            <TextGray>&#10101; </TextGray>
          </div>
        </code>
      </WrapperForCode>
    </WrapperMac>
  );
};

export default Code;
