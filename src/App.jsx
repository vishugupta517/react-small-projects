/* eslint-disable no-unused-vars */
import './App.css';
import ContextPractice from './components/context-practice/App';
import TabTest from './components/custom-tabs/tab-test';
import DarkMode from './components/dark-mode';
import FolderStructure from './components/folder-structure';
import menus from './components/folder-structure/data';
import GithubProfileFinder from './components/github-finder';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import ModalPopup from './components/modal-popup';
import QrCodeGenerator from './components/qr-code-generator';
import RangeSlider from './components/range_slider';
import ScrollProgressBar from './components/scroll-progress-bar';
import SearchAutocomplete from './components/search-autocomplete-api';
import StarRating from './components/star-rating';
import TicTacToe from './components/tic-tact-toe';
import TaskApp from './components/use-reducer-practice';
import Album from './components/albumImage';
import TicketBooking from './components/ticket-booking';
import ColorGenerator from './components/colorGenerator/ColorGenerator';
import Chip from './components/chipTab/Chip';
import Accordion from './components/accordion/Accordion';
function App() {
  return (
    <>
      {/* <div className='App'> */}
      {/* <ColorGenerator /> */}
      {/* <Chip /> */}
      <Accordion />
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'5'}
      /> */}
      {/* <LoadMoreData /> */}
      {/* <FolderStructure menus={menus} /> */}
      {/* <QrCodeGenerator /> */}
      {/* <DarkMode /> */}
      {/* <ScrollProgressBar /> */}
      {/* <TabTest /> */}
      {/* {<ModalPopup />} */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToe/> */}
      {/* <RangeSlider /> */}
      {/* {<TaskApp />} */}
      {/* <ContextPractice /> */}
      {/* <Album /> */}
      {/* <TicketBooking /> */}
      {/* </div> */}
    </>
  );
}
export default App;
