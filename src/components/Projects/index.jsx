import React, { useEffect, useState } from 'react';
import * as S from './styles';
import ImageSlider from '../ImageSlider';
import { useSelector } from 'react-redux';
import { data } from '../../pages/Project/data';

const Index = ({ item, idx }) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const ui = useSelector((state) => state.ui.value);
  const keyword = useSelector((state) => state.ui.searchKeyward);

  const handleToggleVisible = (index) => {
    setVisibleIndexes((prevVisibleIndexes) =>
      prevVisibleIndexes.includes(index)
        ? prevVisibleIndexes.filter((idx) => idx !== index)
        : [...prevVisibleIndexes, index],
    );
  };

  useEffect(() => {
    if (ui) {
      setVisibleIndexes([...Array(data.length).keys()]);
    } else {
      setVisibleIndexes([]);
    }
  }, [ui]);

  useEffect(() => {
    // 검색어가 변경되면 리스트를 모두 닫음
    setVisibleIndexes([]);
  }, [keyword]);

  useEffect(() => {
    setVisibleIndexes([]);
  }, []);

  useEffect(() => {
    // 검색어가 변경될 때마다 데이터를 순회하여 검색된 아이템들의 인덱스를 찾아냄
    if (keyword === '') return;
    const filteredIndexes = data.reduce((acc, item, idx) => {
      const { title, sub_title, content, year } = item;

      // content 배열의 각 요소를 문자열로 합침
      const contentString = content.join(' ');

      // title, content, year를 검색어와 비교
      if (
        title.toLowerCase().includes(keyword.toLowerCase()) ||
        sub_title.toLowerCase().includes(keyword.toLowerCase()) ||
        contentString.toLowerCase().includes(keyword.toLowerCase()) ||
        year.includes(keyword) // year가 문자열이므로 includes로 비교
      ) {
        acc.push(idx);
      }
      return acc;
    }, []);
    setVisibleIndexes(filteredIndexes);
  }, [keyword]);
  return (
    <>
      {' '}
      <S.ListWrapper key={idx} isActive={visibleIndexes.includes(idx)}>
        <S.ListTitle
          onClick={() => handleToggleVisible(idx)}
          isActive={visibleIndexes.includes(idx)}
        >
          <S.Title>
            <h2>
              {item.title} / {item.sub_title}
            </h2>
          </S.Title>
          <S.Year>
            <span>{item.year}</span>
          </S.Year>
        </S.ListTitle>
        {visibleIndexes.includes(idx) && (
          <S.ListContent>
            <S.ListText>
              {item.content.map((item) => (
                <>
                  <S.Content>{item}</S.Content>
                </>
              ))}
              <S.SubContent>
                <div>
                  <p>Designer</p>
                  {item.sub.designer.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
                <div>
                  <p>Client</p>
                  {item.sub.client.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                  {item.sub.Manufacturer && <p>Manufacturer</p>}
                  {item.sub.Manufacturer?.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </S.SubContent>
            </S.ListText>
            <S.SwiperWrapper>
              <ImageSlider images={item.img} />
            </S.SwiperWrapper>
          </S.ListContent>
        )}
      </S.ListWrapper>
    </>
  );
};

export default Index;