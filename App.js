import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import SortingTemplate from './SortingTemplate';
import insertionImage from './images/insertion.png'; 
import selectionImage from './images/selection.png';
import quickImage from './images/quick.png';
import mergeImage from './images/merge.png';
import bubbleImage from './images/bubble.png';
import './App.css'
function App() {
  const descriptionText = `Linia 3: Pętla for zaczyna się od indeksu 1 (bo pierwszy element jest już posortowany). Dla każdego elementu od i = 1 do końca zbioru, algorytm próbuje znaleźć jego odpowiednie miejsce w posortowanej części po lewej stronie.<br />Linia 4: Zmienna klucz jest przypisywana jako bieżący element zbioru zbior[i], który algorytm będzie próbował wstawić w odpowiednie miejsce w posortowanej części zbioru.<br />Linia 6: while j >= 0 and zbior[j] > klucz – pętla while sprawdza, czy elementy po lewej stronie są większe od klucz. Jeśli są, przesuwa je o jedno miejsce w prawo, aby zrobić miejsce dla klucz.<br />Linia 8: Kiedy while kończy działanie, klucz jest umieszczany w pozycji j+1, czyli w odpowiednim miejscu w posortowanej części zbioru.<br />Linia 9: Zbiór zbior jest definiowany, a następnie funkcja sortowanie_przez_wstawianie jest wywoływana. Program kończy się wyświetleniem posortowanego zbioru`;

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul className="nav-links">
              <li><NavLink to="/insertion-sort" activeClassName="active-link">Sortowanie przez wstawianie</NavLink></li>
              <li><NavLink to="/selection-sort" activeClassName="active-link">Sortowanie przez wybieranie</NavLink></li>
              <li><NavLink to="/quick-sort" activeClassName="active-link">Sortowanie szybkie</NavLink></li>
              <li><NavLink to="/merge-sort" activeClassName="active-link">Sortowanie przez scalanie</NavLink></li>
              <li><NavLink to="/bubble-sort" activeClassName="active-link">Sortowanie bąbelkowe</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/insertion-sort" element={<SortingTemplate title="Sortowanie przez wstawianie" imageSrc={insertionImage} code={`def sortowanie_przez wstawianie (zbior):
  rozmiar = len(zbior)
  for i in range(1, rozmiar):
    klucz = zbior[i]
    j = i - 1
    while j >= 0 and zbior[j] > klucz: 
      zbior[j+1] = zbior[j]
      j -= 1
    zbior[j+1] = klucz
zbior = [7, 2, 1, 6, 8, 5, 3, 4] 
sortowanie_przez wstawianie (zbior)

print("Posortowany zbior:", zbior)`} description={`Linia 3: 
Pętla for zaczyna się od indeksu 1 (bo pierwszy element jest już "posortowany"). Dla każdego elementu od i = 1 do końca zbioru, algorytm próbuje znaleźć jego odpowiednie miejsce w posortowanej części po lewej stronie.

Linia 4: 
Zmienna klucz jest przypisywana jako bieżący element zbioru zbior[i], który algorytm będzie próbował wstawić w odpowiednie miejsce w posortowanej części zbioru.

Linia 6: 
while j >= 0 and zbior[j] > klucz – pętla while sprawdza, czy elementy po lewej stronie są większe od klucz. Jeśli są, przesuwa je o jedno miejsce w prawo, aby zrobić miejsce dla klucz.

Linia 8: 
Kiedy while kończy działanie, klucz jest umieszczany w pozycji j+1, czyli w odpowiednim miejscu w posortowanej części zbioru.

Linia 9: 
Zbiór zbior jest definiowany, a następnie funkcja sortowanie_przez_wstawianie jest wywoływana. Program kończy się wyświetleniem posortowanego zbioru`} />} />
          <Route
              path="/selection-sort"
              element={<SortingTemplate title="Sortowanie przez wybieranie" imageSrc={selectionImage} code={`def sortowanie przez wybor (zbior): 
  rozmiar = len(zbior)
  for i in range(rozmiar - 1):
    indeks_minimum = i
    for j in range(i + 1, rozmiar):
      if zbior[j] < zbior[indeks_minimum]:
        indeks_minimum = j
    zbior[i], zbior[indeks_minimum] = zbior[indeks_minimum], zbior[i]
zbior = [7, 2, 1, 6, 8, 5, 3, 4]
sortowanie_przez wybor(zbior)
print("Posortowany zbior:", zbior)`} description={`
Linia 2: 
Pętla for iteruje po każdym elemencie zbioru, poczynając od indeksu 0, aż do przedostatniego elementu (rozmiar - 1). Dla każdego elementu algorytm stara się znaleźć najmniejszy element w pozostałej nieposortowanej części zbioru.

Linia 3: 
Zmienna indeks_minimum jest ustawiana na wartość i, czyli indeks aktualnie rozpatrywanego elementu, który może być najmniejszym elementem w pozostałej części zbioru.

Linia 4: 
Zagnieżdżona pętla for przechodzi przez wszystkie elementy zbioru od indeksu i + 1 do końca zbioru, w poszukiwaniu elementu mniejszego od aktualnie wybranego.

Linia 5: 
Instrukcja warunkowa if zbior[j] < zbior[indeks_minimum] sprawdza, czy element zbior[j] jest mniejszy od obecnie najmniejszego elementu. Jeśli tak, zmienia indeks_minimum na indeks tego elementu.

Linia 7: 
Po zakończeniu wewnętrznej pętli, element znajdujący się na pozycji indeks_minimum jest zamieniany miejscami z elementem na pozycji i. W ten sposób najmniejszy element z nieposortowanej części zbioru trafia na początek tej części.

Linia 9: 
Zbiór zbior jest definiowany, a następnie funkcja sortowanie_przez_wybor jest wywoływana. Program kończy się wyświetleniem posortowanego zbioru.`} />}
            />
            <Route
              path="/quick-sort"
              element={<SortingTemplate title="Sortowanie szybkie" imageSrc={quickImage} code={`def quicksort(zbior, lewy, prawy):
  i = lewy
  j = prawy
  os = zbior[ (lewy + prawy) // 2]
  while i <= j:
    while zbior[i] < os:
      i += 1
    while zbior[j] > os:
      j -= 1
    if i <= j:
      zbior[i], zbior[j] = zbior[j], zbior[i]
      i += 1
      j -= 1
  if lewy <j:
    quicksort(zbior, lewy, j)
  if i < prawy:
    quicksort(zbior, i, prawy)
zbior= [7, 2, 1, 6, 8, 5, 3, 4] 
quicksort(zbior, 0, len(zbior) - 1)
print("Posortowany zbior:", zbior)`} description={`Linia 4: 
Zmienna os jest ustawiana na element, który znajduje się w środku zbioru. To jest tzw. "pivot", wokół którego będzie przebiegało dzielenie zbioru na dwie części.

Linia 5: 
Pętla while i <= j będzie wykonywać się tak długo, jak indeksy i i j nie przekroczą siebie nawzajem, co oznacza, że algorytm będzie szukał elementów, które wymagają zamiany.

Linia 6: 
Pętla while zbior[i] < os zwiększa indeks i, dopóki element pod tym indeksem jest mniejszy od pivota.

Linia 8: 
Pętla while zbior[j] > os zmniejsza indeks j, dopóki element pod tym indeksem jest większy od pivota.

Linia 10: 
Jeżeli indeks i nie przekroczył indeksu j, oznacza to, że znaleziono elementy po obu stronach pivota, które wymagają zamiany.

Linia 11:
W tej linii następuje zamiana miejscami elementów na indeksach i i j. Dzięki temu elementy mniejsze od pivota znajdują się po lewej stronie, a większe po prawej stronie.

Linia 12: 
Po dokonaniu zamiany, indeks i jest zwiększany, aby przejść do kolejnego elementu po lewej stronie.

Linia 13: 
Indeks j jest zmniejszany, aby przejść do kolejnego elementu po prawej stronie.

Linia 14: 
Sprawdzane jest, czy lewa część zbioru (od lewy do j) zawiera więcej niż jeden element. Jeśli tak, wywoływana jest rekurencyjna funkcja quicksort dla tej części zbioru.

Linia 16: 
Sprawdzane jest, czy prawa część zbioru (od i do prawy) zawiera więcej niż jeden element. Jeśli tak, wywoływana jest rekurencyjna funkcja quicksort dla tej części zbioru.

Linia 18: 
Zbiór zbior jest definiowany, a następnie funkcja quicksort jest wywoływana dla całego zbioru. Program kończy się wyświetleniem posortowanego zbioru.`} />}
            />
            <Route
              path="/merge-sort"
              element={<SortingTemplate title="Sortowanie przez scalanie" imageSrc={mergeImage} code={`def scal(zbior, lewy, srodek, prawy):
  rozmiar1 = srodek - lewy +1
  rozmiar2 = prawy - srodek
  lewaCzesc = zbior[lewy:srodek+1]
  prawaCzesc = zbior[srodek+1:prawy+1]
  1=0 
  j=0
  k = lewy
  while i < rozmiarl and j < rozmiar2: 
    if lewaCzesc[i] <= prawaCzesc[j]: 
      zbior[k] = lewaCzesc[i]
    else:
      zbior[k] = prawaCzesc[j]
      i += 1
    k+= 1
    while i < rozmiar1:
      zbior[k] = lewaczesc[i]
      i += 1
      k += 1
    while j < rozmiar2:
      zbior[k] = prawaCzesc[j]
      j+=1
      k += 1
def sortowanie przez_scalanie (zbior, lewy, prawy):
  if lewy<prawy:
    srodek = (lewy + prawy) // 2
    sortowanie przez_scalanie (zbior, lewy, srodek)
    sortowanie przez_scalanie (zbior, srodek + 1, prawy)

    scal(zbior, lewy, srodek, prawy)
zbior = [7, 2, 1, 6, 8, 5, 3, 4]
sortowanie przez_scalanie (zbior, 0, len(zbior) - 1)
print("Posortowany zbior:", zbior)`} description={`Linia 2: 
Zmienna rozmiar ma być długością lewej części zbioru, ale występuje tu błąd składniowy (brak przypisania wartości). Powinno być: rozmiar = srodek - lewy + 1.

Linia 3: 
Zmienna lewy jest zwiększana o 1, ale nie jest przypisana, więc ta linia nie robi nic, ponieważ lewy jest traktowane tylko jako argument funkcji.

Linia 4: 
Zmienna rozmiar2 jest obliczana jako różnica pomiędzy prawym a środkowym indeksem, co daje długość prawej części zbioru.

Linia 5: 
lewaczesc to podlista zbioru, która zawiera elementy od lewy do srodek + 1, czyli lewą część zbioru.

Linia 6: 
prawaCzesc to podlista zbioru, zawierająca elementy od srodek + 1 do prawy + 1, czyli prawą część zbioru.

Linia 7: 
W tej linii są błędy składniowe. Powinno być i = 0 oraz j = 0, aby zainicjować zmienne indeksów obu części.

Linia 8: 
Zmienna k jest ustawiana na wartość lewy, co oznacza, że przetwarzanie połączonych list rozpocznie się od tego indeksu w oryginalnym zbiorze.

Linia 9: 
Pętla while i < rozmiar1 and j < rozmiar2 porównuje elementy obu części zbioru i wstawia mniejsze elementy z obu list do głównego zbioru. Jeśli element w lewej części jest mniejszy lub równy elementowi z prawej części, jest dodawany do zbioru.

Linia 10-11: 
Jeśli element w prawej części jest mniejszy, następuje zwiększenie indeksu prawej części (j += 1).

Linia 12: 
Jeśli powyższa pętla zakończyła się, a w prawej części są jeszcze elementy, są one dodawane do zbioru.

Linia 13: 
Zwiększenie zmiennej k, aby przejść do następnego indeksu w głównym zbiorze.

Linia 14-16: 
Pętla ta dodaje pozostałe elementy lewej części, jeśli są jeszcze jakieś elementy w lewej części, po zakończeniu głównej pętli.

Linia 17-19: 
Podobnie, jeśli po zakończeniu głównej pętli w prawej części zostały jakieś elementy, są one dodawane do zbioru.

Linia 21: 
Funkcja sortowanie_przez_scalanie jest główną funkcją rekurencyjną, która dzieli zbiór na dwie części (lewa i prawa) i rekurencyjnie wywołuje siebie dla tych części.

Linia 22: 
Warunek if lewy < prawy sprawdza, czy w zbiorze jest więcej niż jeden element. Jeśli tak, funkcja dzieli zbiór na dwie części i wywołuje siebie rekurencyjnie.

Linia 23: 
Zmienna srodek jest obliczana jako średnia pomiędzy lewy i prawy, dzieląc zbiór na dwie części.

Linia 24-25: 
Wywołania rekurencyjne dla lewej i prawej części zbioru, aby posortować je osobno.

Linia 27: 
Po posortowaniu obu części, wywoływana jest funkcja scal, aby połączyć je w jeden posortowany zbiór.

Linia 28: 
Zbiór zbior jest definiowany, a funkcja sortowanie_przez_scalanie jest wywoływana dla całego zbioru. Program kończy się wyświetleniem posortowanego zbioru.`} />}
            />
            <Route
              path="/bubble-sort"
              element={<SortingTemplate title="Sortowanie bąbelkowe" imageSrc={bubbleImage} code={`def sortowanie_babelkowe(zbior):
  rozmiar = len(zbior)
  for i in range(rozmiar - 1):
    for j in range(rozmiar - i - 1):
      if zbior[j] > zbior[j + 1]:
        zbior[j], zbior[j + 1] = zbior[j + 1], zbior[j]
zbior = [7, 2, 1, 6, 8, 5, 3, 4]
sortowanie_babelkowe(zbior)
print("Posortowany zbior:", zbior)`} description={`Linia 1:
Definicja funkcji sortowanie_babelkowe(zbior). Funkcja przyjmuje jeden argument: listę zbior, która będzie posortowana za pomocą algorytmu bąbelkowego.

Linia 2:
Inicjalizacja zmiennej rozmiar, która przechowuje długość listy zbior. Długość listy jest używana do kontrolowania liczby iteracji pętli w algorytmie.

Linia 3:
Pierwsza pętla for i in range(rozmiar - 1) to pętla zewnętrzna, która przechodzi przez każdy element w liście. Działa ona przez rozmiar - 1 iteracji, ponieważ po każdej iteracji największy element "wypływa" na koniec listy, więc nie ma potrzeby porównywać go ponownie.

Linia 4:
Druga pętla for j in range(rozmiar - i - 1) jest pętlą wewnętrzną, która iteruje przez pozostałe elementy w liście, pomijając już posortowane elementy na końcu. Zmienna j przechodzi przez indeksy od 0 do rozmiar - i - 1, a więc z każdym przebiegiem zewnętrznej pętli liczba elementów do porównania maleje.

Linia 5:
Warunek if zbior[j] > zbior[j + 1] sprawdza, czy element zbior[j] jest większy niż element zbior[j + 1]. Jeśli tak, to oznacza, że te dwa elementy muszą zostać zamienione miejscami, aby w porównaniu z pozostałymi elementami zachowały porządek rosnący.

Linia 6:
Jeśli warunek w linii 5 jest spełniony, następuje zamiana miejscami elementów listy`} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
